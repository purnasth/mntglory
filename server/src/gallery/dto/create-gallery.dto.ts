import { IsNotEmpty, IsString } from 'class-validator';

export class CreateGalleryDto {
  @IsNotEmpty()
  @IsString()
  alt!: string;

  @IsNotEmpty()
  @IsString()
  category!: string;
}
