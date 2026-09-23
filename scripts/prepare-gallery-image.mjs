import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

async function processGalleryImage() {
  const inputPath = "C:/Users/Baigo/.gemini/antigravity-ide/brain/dc3da51f-45f7-4359-b4a1-07c687e40350/.user_uploaded/media_1789823982189.png";
  const outputDir = path.resolve("public/images/gallery");

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const meta = await sharp(inputPath).metadata();
  console.log("Original Image metadata:", meta.width, "x", meta.height, meta.format);

  // 1. Export high-res webp
  await sharp(inputPath)
    .sharpen({ sigma: 0.9, m1: 1.0, m2: 2.0 })
    .webp({ quality: 95, effort: 6 })
    .toFile(path.join(outputDir, "finance-minister-dialogue.webp"));

  // 2. Export high-res png fallback
  await sharp(inputPath)
    .sharpen({ sigma: 0.9, m1: 1.0, m2: 2.0 })
    .png({ quality: 95, compressionLevel: 8 })
    .toFile(path.join(outputDir, "finance-minister-dialogue.png"));

  console.log("Saved gallery images to public/images/gallery/!");
}

processGalleryImage().catch(console.error);
