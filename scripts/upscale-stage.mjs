import sharp from "sharp";
import path from "node:path";

async function upscaleStage() {
  const input = path.resolve("public/images/reference-stage.png");
  const output = path.resolve("public/images/hero-stage-hd.webp");
  const outputPng = path.resolve("public/images/hero-stage-hd.png");
  
  // Upscale to 2048px width with Lanczos3 and subtle sharpening for retina clarity
  await sharp(input)
    .resize(2048, null, {
      kernel: sharp.kernel.lanczos3,
      fit: "contain"
    })
    .sharpen({
      sigma: 1.2,
      m1: 1.0,
      m2: 2.0
    })
    .webp({ quality: 98, effort: 6 })
    .toFile(output);
    
  await sharp(input)
    .resize(2048, null, {
      kernel: sharp.kernel.lanczos3,
      fit: "contain"
    })
    .sharpen({
      sigma: 1.2,
      m1: 1.0,
      m2: 2.0
    })
    .png({ quality: 100 })
    .toFile(outputPng);
    
  console.log("Created HD hero stage image: 2048px width");
}

upscaleStage().catch(console.error);
