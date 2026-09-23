import puppeteer from "puppeteer-core";
import path from "node:path";

async function testPalette() {
  const edgePath = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
  
  const browser = await puppeteer.launch({
    executablePath: edgePath,
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-gpu"],
  });
  
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
  
  await page.goto("http://localhost:3000", { waitUntil: "networkidle0", timeout: 30000 });
  await new Promise((r) => setTimeout(r, 2200));
  
  // Press Ctrl+K
  await page.keyboard.down("Control");
  await page.keyboard.press("k");
  await page.keyboard.up("Control");
  await new Promise((r) => setTimeout(r, 400));
  
  await page.screenshot({ path: path.resolve("public/rendered-command-palette.png") });
  console.log("Captured command palette");

  await browser.close();
}

testPalette().catch(console.error);
