import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { join } from 'path';
import { unlink } from 'fs/promises';
import * as sharp from 'sharp';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTeamMemberDto } from './dto/create-team-member.dto';

const MAX_SIZE = 800;
const QUALITY = 80;

@Injectable()
export class TeamService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.teamMember.findMany({
      orderBy: { createdAt: 'asc' },
    });
  }

  async create(dto: CreateTeamMemberDto, file?: Express.Multer.File) {
    let image = '';

    if (file) {
      const optimizedName = `${file.filename.split('.')[0]}.webp`;
      const outputPath = join('./uploads/team', optimizedName);

      await sharp(file.path)
        .resize(MAX_SIZE, MAX_SIZE, {
          fit: 'inside',
          withoutEnlargement: true,
        })
        .webp({ quality: QUALITY })
        .toFile(outputPath);

      await unlink(file.path).catch(() => {});
      image = `/uploads/team/${optimizedName}`;
    }

    // Parse socials from multipart string if needed
    let socials: unknown[] = [];
    if (dto.socials) {
      socials =
        typeof dto.socials === 'string' ? JSON.parse(dto.socials) : dto.socials;
    }

    return this.prisma.teamMember.create({
      data: {
        name: dto.name,
        position: dto.position,
        image,
        description: dto.description,
        socials: socials as unknown as Prisma.InputJsonValue,
      },
    });
  }
}
