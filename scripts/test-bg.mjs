import { removeBackground } from "@imgly/background-removal-node";
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

async function main() {
  const inputPath = path.resolve("public/images/source/humza-original.png");
  console.log("Reading source image:", inputPath);
  
  const fileUrl = pathToFileURL(inputPath).href;
  console.log("File URL:", fileUrl);
  
  const blob = await removeBackground(fileUrl);
  const buffer = Buffer.from(await blob.arrayBuffer());
  
  const outputPath = path.resolve("public/images/source/humza-cutout.png");
  fs.writeFileSync(outputPath, buffer);
  console.log("Successfully created isolated portrait:", outputPath, "size:", buffer.length);
}

main().catch(err => {
  console.error("Error isolating background:", err);
  process.exit(1);
});
