/**
 * Cinematic Humza Portrait Processor v2
 * 
 * Preserves transparency while applying:
 * 1. Subtle warm color shift (not sepia)
 * 2. Contrast enhancement
 * 3. Slight sharpening
 * 4. Upscale to crisp resolution
 */

import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const SOURCE = path.join(ROOT, "public/images/source/humza-trimmed.png");
const OUTPUT = path.join(ROOT, "public/images/humza-cinematic.png");
const OUTPUT_WEBP = path.join(ROOT, "public/images/humza-cinematic.webp");

async function processPortrait() {
  console.log("🎬 Processing cinematic portrait v2...");

  const meta = await sharp(SOURCE).metadata();
  console.log(`  Source: ${meta.width}x${meta.height}, channels: ${meta.channels}`);

  // Target 1400px height for crisp display
  const targetHeight = 1400;
  const scale = targetHeight / meta.height;
  const targetWidth = Math.round(meta.width * scale);

  console.log(`  Target: ${targetWidth}x${targetHeight}`);

  // Step 1: Upscale with Lanczos, keep alpha
  let processed = sharp(SOURCE)
    .resize(targetWidth, targetHeight, {
      kernel: sharp.kernel.lanczos3,
      fit: "fill",
    })
    .ensureAlpha();

  // Step 2: Extract the image to raw pixels, apply color grading manually
  // Use sharp's built-in adjustments that preserve alpha
  processed = processed
    .modulate({
      brightness: 0.95,     // Slightly moody
      saturation: 0.82,     // Subtle desaturation for editorial look
      hue: 15,              // Shift hue slightly warm
    })
    .linear(1.15, -10)      // Boost contrast
    .sharpen({
      sigma: 1.0,
      m1: 1.0,
      m2: 0.5,
    });

  // Save PNG with transparency
  await processed
    .png({ compressionLevel: 6 })
    .toFile(OUTPUT);

  // Save WebP with transparency  
  await sharp(OUTPUT)
    .webp({ quality: 92, alphaQuality: 100 })
    .toFile(OUTPUT_WEBP);

  const outMeta = await sharp(OUTPUT).metadata();
  console.log(`  Output: ${outMeta.width}x${outMeta.height}, channels: ${outMeta.channels}`);

  const fs = await import("fs");
  const pngStat = await fs.promises.stat(OUTPUT);
  const webpStat = await fs.promises.stat(OUTPUT_WEBP);
  console.log(`  PNG:  ${(pngStat.size / 1024).toFixed(0)} KB`);
  console.log(`  WebP: ${(webpStat.size / 1024).toFixed(0)} KB`);
  console.log("✅ Done!");
}

processPortrait().catch(console.error);
