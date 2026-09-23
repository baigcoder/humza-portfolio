import sharp from "sharp";
import path from "node:path";
import fs from "node:fs";

async function process() {
  const cutoutPath = path.resolve("public/images/source/humza-cutout.png");
  
  // First trim empty transparent borders to get exact subject bounding box
  const trimmed = await sharp(cutoutPath)
    .trim()
    .toBuffer({ resolveWithObject: true });
    
  console.log("Trimmed dimensions:", trimmed.info.width, "x", trimmed.info.height);
  
  // Save trimmed high-res master
  const trimmedPath = path.resolve("public/images/source/humza-trimmed.png");
  fs.writeFileSync(trimmedPath, trimmed.data);
  
  // In trimmed image:
  // Subject is full body: top of head to knees/pants.
  // For Hero: we want from top of head to mid-hip / lower waistcoat (roughly top 62% of subject height).
  const heroCropHeight = Math.round(trimmed.info.height * 0.65);
  const heroCropWidth = trimmed.info.width;
  
  console.log("Hero crop:", heroCropWidth, "x", heroCropHeight);
  
  // Extract hero portrait (from top to lower waistcoat)
  // And upscale to crisp high-res 1000px height with subtle warmth & contrast
  const heroBuffer = await sharp(trimmed.data)
    .extract({
      left: 0,
      top: 0,
      width: heroCropWidth,
      height: heroCropHeight
    })
    .resize({
      height: 1200,
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    // Apply photographic contrast and tone curve:
    // subtle contrast enhancement to deepen the blacks of waistcoat and bring out edge warmth
    .modulate({
      brightness: 1.02,
      saturation: 1.08
    })
    .webp({ quality: 95, effort: 6 })
    .toBuffer();
    
  fs.writeFileSync(path.resolve("public/images/humza-hero.webp"), heroBuffer);
  console.log("Created public/images/humza-hero.webp, size:", heroBuffer.length);
  
  // Also create a PNG version for maximum compatibility
  const heroPngBuffer = await sharp(trimmed.data)
    .extract({
      left: 0,
      top: 0,
      width: heroCropWidth,
      height: heroCropHeight
    })
    .resize({
      height: 1200,
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .modulate({
      brightness: 1.02,
      saturation: 1.08
    })
    .png({ quality: 100 })
    .toBuffer();
  fs.writeFileSync(path.resolve("public/images/humza-hero.png"), heroPngBuffer);

  // About page portrait (slightly tighter bust/waist crop)
  const aboutCropHeight = Math.round(trimmed.info.height * 0.75);
  const aboutBuffer = await sharp(trimmed.data)
    .extract({
      left: 0,
      top: 0,
      width: trimmed.info.width,
      height: aboutCropHeight
    })
    .resize({
      height: 1000,
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .webp({ quality: 92 })
    .toBuffer();
  fs.writeFileSync(path.resolve("public/images/humza-about.webp"), aboutBuffer);
  console.log("Created public/images/humza-about.webp");

  // OG image: full cut with subtle dark background framing
  const ogBuffer = await sharp(trimmed.data)
    .resize({ height: 900, fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .webp({ quality: 90 })
    .toBuffer();
  fs.writeFileSync(path.resolve("public/images/humza-og.webp"), ogBuffer);
  console.log("Created public/images/humza-og.webp");
}

process().catch(err => {
  console.error("Error in process-humza:", err);
  process.exit(1);
});
