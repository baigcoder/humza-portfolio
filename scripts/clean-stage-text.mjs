import sharp from "sharp";
import path from "node:path";

async function cleanStage() {
  const stagePath = path.resolve("public/images/reference-stage.png");
  
  // Crop a clean sample of the dark charcoal waistcoat from x: 280-330, y: 390-490
  const vestSample = await sharp(stagePath)
    .extract({ left: 260, top: 400, width: 70, height: 100 })
    .resize(320, 110, { fit: "cover" })
    .blur(1)
    .toBuffer();
    
  // Composite the clean vest texture over the text area (x: 340, y: 395)
  // with a soft radial mask or edge feathering
  const cleaned = await sharp(stagePath)
    .composite([
      {
        input: vestSample,
        left: 345,
        top: 395,
        blend: "over"
      }
    ])
    .toBuffer();
    
  await sharp(cleaned).toFile("public/images/hero-clean-test.png");
  console.log("Cleaned test generated");
}

cleanStage().catch(console.error);
