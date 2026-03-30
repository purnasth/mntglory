import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { NoticeCategory } from '../notice-category.enum';

export class CreateNoticeDto {
  @IsNotEmpty()
  @IsString()
  title!: string;

  @IsNotEmpty()
  @IsString()
  content!: string;

  @IsNotEmpty()
  @IsEnum(NoticeCategory, {
    message: `category must be one of: ${Object.values(NoticeCategory).join(', ')}`,
  })
  category!: NoticeCategory;

  @IsOptional()
  @IsString()
  date?: string;
}
