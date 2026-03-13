/**
 * Script: convert-webp.mjs
 * Konversi semua gambar di public/Kos Image ke WebP
 * - JPG/PNG → WebP quality 82
 * - image.png (denah/schematic) → WebP lossless untuk menjaga ketajaman garis
 * - Simpan di public/Kos Image/webp/
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const INPUT_DIR = path.resolve(__dirname, '../public/Kos Image');
const OUTPUT_DIR = path.resolve(INPUT_DIR, 'webp');

// Buat folder output
if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

const EXTS = ['.jpg', '.jpeg', '.png'];
const files = fs.readdirSync(INPUT_DIR).filter(f => EXTS.includes(path.extname(f).toLowerCase()));

let totalOriginal = 0;
let totalConverted = 0;

console.log(`\n🖼  Memproses ${files.length} gambar...\n`);

for (const file of files) {
  const inputPath = path.join(INPUT_DIR, file);
  const baseName = path.parse(file).name;
  const outputPath = path.join(OUTPUT_DIR, `${baseName}.webp`);

  const originalSize = fs.statSync(inputPath).size;

  try {
    if (file === 'image.png') {
      // Denah skematik → lossless WebP (garis tetap tajam)
      await sharp(inputPath)
        .webp({ lossless: true, effort: 6 })
        .toFile(outputPath);
    } else {
      // Foto → lossy WebP quality 82, resize max 1920px wide
      await sharp(inputPath)
        .resize({ width: 1920, withoutEnlargement: true })
        .webp({ quality: 82, effort: 5 })
        .toFile(outputPath);
    }

    const convertedSize = fs.statSync(outputPath).size;
    const saving = ((1 - convertedSize / originalSize) * 100).toFixed(1);

    totalOriginal += originalSize;
    totalConverted += convertedSize;

    console.log(`  ✅ ${file.padEnd(32)} ${(originalSize/1024).toFixed(0).padStart(6)} KB → ${(convertedSize/1024).toFixed(0).padStart(6)} KB  (-${saving}%)`);
  } catch (e) {
    console.error(`  ❌ Gagal: ${file} — ${e.message}`);
  }
}

const totalSaving = ((1 - totalConverted / totalOriginal) * 100).toFixed(1);
console.log(`\n📦  Total: ${(totalOriginal/1024/1024).toFixed(1)} MB → ${(totalConverted/1024/1024).toFixed(1)} MB  (hemat ${totalSaving}%)\n`);
console.log(`📁  Output: ${OUTPUT_DIR}\n`);
