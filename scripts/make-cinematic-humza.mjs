import sharp from "sharp";
import path from "node:path";

async function makeCinematicHumza() {
  const stagePath = path.resolve("public/images/reference-stage.png");
  
  // Extract upper portrait (from top of head to collar/upper vest: y:0 to 380, x:200 to 680)
  const upperPortrait = await sharp(stagePath)
    .extract({ left: 200, top: 0, width: 480, height: 380 })
    .png()
    .toBuffer();
    
  // Sample clean vest fabric from left side
  const vestTexture = await sharp(stagePath)
    .extract({ left: 240, top: 340, width: 80, height: 50 })
    .resize(480, 160, { fit: "cover" })
    .blur(1.5)
    .png()
    .toBuffer();
    
  // Composite cleanly
  await sharp({
    create: {
      width: 480,
      height: 520,
      channels: 4,
      background: { r: 13, g: 13, b: 13, alpha: 1 }
    }
  })
  .composite([
    { input: vestTexture, top: 360, left: 0 },
    { input: upperPortrait, top: 0, left: 0 }
  ])
  .png()
  .toFile("public/images/humza-cinematic-master.png");
  
  console.log("Created humza-cinematic-master.png successfully");
}

makeCinematicHumza().catch(console.error);
