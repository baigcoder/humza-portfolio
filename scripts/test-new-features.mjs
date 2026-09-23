import puppeteer from "puppeteer-core";
import path from "node:path";

async function testFeatures() {
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

  // 1. Test clicking first article in Journal to open Executive Article Reader Modal
  await page.evaluate(() => document.getElementById("journal")?.scrollIntoView());
  await new Promise((r) => setTimeout(r, 400));
  
  // Click first article
  const articleCard = await page.$("#journal article");
  if (articleCard) {
    await articleCard.click();
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: path.resolve("public/rendered-article-modal.png") });
    console.log("Captured Executive Article Reader modal");

    // Close modal via Escape
    await page.keyboard.press("Escape");
    await new Promise((r) => setTimeout(r, 300));
  }

  // 2. Test Footer navigation
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await new Promise((r) => setTimeout(r, 400));
  await page.screenshot({ path: path.resolve("public/rendered-footer.png") });
  console.log("Captured Footer with 4-column navigation");

  await browser.close();
  console.log("Feature testing complete!");
}

testFeatures().catch(console.error);
