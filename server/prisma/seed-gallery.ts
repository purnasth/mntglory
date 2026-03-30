// TODO: This script is meant to be run once to seed the gallery images into the database. It processes images from a specified source directory, resizes and converts them to WebP format, saves them to an output directory, and then inserts records into the database with the image URLs, alt text, and assigned categories.

import { PrismaClient } from '@prisma/client';
import * as sharp from 'sharp';
import { join } from 'path';
import { existsSync, mkdirSync } from 'fs';
import { readdir } from 'fs/promises';

const prisma = new PrismaClient();

const SOURCE_DIR = join(
  process.env.HOME || '~',
  'Downloads/temp-mnt-glory-gallery',
);
const OUTPUT_DIR = join(__dirname, '../uploads/gallery');
const MAX_WIDTH = 1920;
const MAX_HEIGHT = 1080;
const QUALITY = 80;

// Assign a category to each image (cycles through available categories)
const categories = [
  'Arts',
  'Science',
  'Programs',
  'Sports',
  'Music',
  'Educational',
  'Cultural',
  'Other',
];

async function main() {
  if (!existsSync(OUTPUT_DIR)) {
    mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const files = (await readdir(SOURCE_DIR)).filter((f) =>
    /\.(png|jpe?g|webp)$/i.test(f),
  );

  // Sort numerically: 1.png, 2.png, ... 33.png
  files.sort((a, b) => {
    const numA = parseInt(a.split('.')[0], 10);
    const numB = parseInt(b.split('.')[0], 10);
    return numA - numB;
  });

  console.log(`Found ${files.length} images. Processing...`);

  const records: { url: string; alt: string; category: string }[] = [];

  for (const file of files) {
    const name = file.split('.')[0];
    const outputName = `${name}.webp`;
    const inputPath = join(SOURCE_DIR, file);
    const outputPath = join(OUTPUT_DIR, outputName);

    await sharp(inputPath)
      .resize(MAX_WIDTH, MAX_HEIGHT, {
        fit: 'inside',
        withoutEnlargement: true,
      })
      .webp({ quality: QUALITY })
      .toFile(outputPath);

    const category = categories[parseInt(name, 10) % categories.length];

    records.push({
      url: `/uploads/gallery/${outputName}`,
      alt: `Gallery image ${name}`,
      category,
    });

    console.log(`  ✓ ${file} → ${outputName} [${category}]`);
  }

  const result = await prisma.galleryImage.createMany({ data: records });
  console.log(`\nInserted ${result.count} gallery images into the database.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
