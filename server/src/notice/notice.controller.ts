import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { NoticeService } from './notice.service';
import { CreateNoticeDto } from './dto/create-notice.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { NoticeCategory } from './notice-category.enum';

@Controller('notice')
export class NoticeController {
  constructor(private readonly noticeService: NoticeService) {}

  @Get()
  findAll(
    @Query('category') category?: NoticeCategory,
    @Query('sortBy') sortBy?: 'date' | 'title',
  ) {
    return this.noticeService.findAll(category, sortBy);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() dto: CreateNoticeDto) {
    return this.noticeService.create(dto);
  }
}
