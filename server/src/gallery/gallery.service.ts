import { Injectable } from '@nestjs/common';
import { join } from 'path';
import { unlink } from 'fs/promises';
import * as sharp from 'sharp';
import { PrismaService } from '../prisma/prisma.service';
import { CreateGalleryDto } from './dto/create-gallery.dto';

const MAX_WIDTH = 1920;
const MAX_HEIGHT = 1080;
const QUALITY = 80;

@Injectable()
export class GalleryService {
  constructor(private prisma: PrismaService) {}

  async findAll(category?: string) {
    const where = category ? { category } : {};
    return this.prisma.galleryImage.findMany({
      where,
      orderBy: { createdAt: 'desc' },
    });
  }

  async create(dto: CreateGalleryDto, file: Express.Multer.File) {
    const optimizedName = `${file.filename.split('.')[0]}.webp`;
    const outputPath = join('./uploads/gallery', optimizedName);

    await sharp(file.path)
      .resize(MAX_WIDTH, MAX_HEIGHT, {
        fit: 'inside',
        withoutEnlargement: true,
      })
      .webp({ quality: QUALITY })
      .toFile(outputPath);

    // Remove the temp original
    await unlink(file.path).catch(() => {});

    const url = `/uploads/gallery/${optimizedName}`;
    return this.prisma.galleryImage.create({
      data: {
        url,
        alt: dto.alt,
        category: dto.category,
      },
    });
  }
}
