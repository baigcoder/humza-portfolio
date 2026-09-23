import { removeBackground } from "@imgly/background-removal-node";
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

async function extractSubject() {
  const inputPath = path.resolve("public/images/reference-stage.png");
  const fileUrl = pathToFileURL(inputPath).href;
  
  console.log("Removing background from reference-stage.png...");
  const blob = await removeBackground(fileUrl);
  const buffer = Buffer.from(await blob.arrayBuffer());
  
  fs.writeFileSync(path.resolve("public/images/humza-reference-cutout.png"), buffer);
  console.log("Extracted subject from reference-stage, size:", buffer.length);
}

extractSubject().catch(console.error);
