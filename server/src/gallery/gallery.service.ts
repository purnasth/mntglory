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

  async findAll(category?: string, cursor?: number, limit = 12) {
    const where = category ? { category } : {};
    const query: Parameters<typeof this.prisma.galleryImage.findMany>[0] = {
      where,
      orderBy: { createdAt: 'desc' },
      take: limit + 1, // fetch one extra to check hasMore
    };

    if (cursor) {
      query.cursor = { id: cursor };
      query.skip = 1; // skip the cursor item itself
    }

    const items = await this.prisma.galleryImage.findMany(query);
    const hasMore = items.length > limit;
    if (hasMore) items.pop(); // remove the extra item

    return {
      data: items,
      nextCursor: hasMore ? items[items.length - 1].id : null,
    };
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
