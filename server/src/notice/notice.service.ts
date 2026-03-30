import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateNoticeDto } from './dto/create-notice.dto';

@Injectable()
export class NoticeService {
  constructor(private prisma: PrismaService) {}

  async findAll(category?: string, sortBy: 'date' | 'title' = 'date') {
    const where = category ? { category } : {};
    const orderBy =
      sortBy === 'title'
        ? { title: 'asc' as const }
        : { date: 'desc' as const };

    return this.prisma.notice.findMany({
      where,
      orderBy,
    });
  }

  async create(dto: CreateNoticeDto) {
    return this.prisma.notice.create({
      data: {
        title: dto.title,
        content: dto.content,
        category: dto.category,
        date: dto.date ? new Date(dto.date) : new Date(),
      },
    });
  }
}
