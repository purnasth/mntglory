import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { GalleryCategory } from '../gallery-category.enum';

export class CreateGalleryDto {
  @IsNotEmpty()
  @IsString()
  alt!: string;

  @IsNotEmpty()
  @IsEnum(GalleryCategory, {
    message: `category must be one of: ${Object.values(GalleryCategory).join(', ')}`,
  })
  category!: GalleryCategory;
}
