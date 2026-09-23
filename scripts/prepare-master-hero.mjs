import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";
import { removeBackground } from "@imgly/background-removal-node";
import { pathToFileURL } from "node:url";

const inputSource = "C:/Users/Baigo/.gemini/antigravity-ide/brain/dc3da51f-45f7-4359-b4a1-07c687e40350/.user_uploaded/media_1789813377793.png";
const destMasterPng = path.resolve("public/images/humza-hero-master.png");
const destMaster2kWebp = path.resolve("public/images/humza-hero-master-2k.webp");
const destMaster2kPng = path.resolve("public/images/humza-hero-master-2k.png");
const destCutout = path.resolve("public/images/humza-master-cutout.png");

async function main() {
  console.log("Copying and processing user's master image...");
  fs.copyFileSync(inputSource, destMasterPng);
  console.log("Copied to", destMasterPng);

  const meta = await sharp(destMasterPng).metadata();
  console.log("Source dimensions:", meta.width, "x", meta.height);

  // 2K Upscale with Lanczos3 and subtle sharpening for ultra crisp display
  const targetW = 2048;
  const targetH = Math.round((meta.height / meta.width) * targetW);

  console.log(`Upscaling to ${targetW}x${targetH}...`);
  await sharp(destMasterPng)
    .resize(targetW, targetH, { kernel: sharp.kernel.lanczos3 })
    .sharpen({ sigma: 1.0, m1: 0.6, m2: 0.3 })
    .png({ quality: 95, compressionLevel: 6 })
    .toFile(destMaster2kPng);

  await sharp(destMaster2kPng)
    .webp({ quality: 95 })
    .toFile(destMaster2kWebp);

  console.log("Created 2K master images.");

  // Now create cutout of Humza for 3D depth layering
  console.log("Generating Humza cutout for 3D back-text depth...");
  try {
    const fileUrl = pathToFileURL(destMasterPng).href;
    const blob = await removeBackground(fileUrl);
    const buffer = Buffer.from(await blob.arrayBuffer());
    fs.writeFileSync(destCutout, buffer);
    console.log("Cutout created at:", destCutout, "size:", buffer.length);

    // Also create high-res cutout webp
    await sharp(destCutout)
      .resize(targetW, targetH, { kernel: sharp.kernel.lanczos3 })
      .webp({ quality: 95, alphaQuality: 100 })
      .toFile(path.resolve("public/images/humza-master-cutout.webp"));
    console.log("Created high-res cutout webp.");
  } catch (err) {
    console.error("Cutout generation error (non-fatal):", err);
  }
}

main().catch(console.error);
