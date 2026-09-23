const puppeteer = require("puppeteer-core");
const fs = require("fs");
const path = require("path");

const edgePath = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const artifactDir = "C:\\Users\\Baigo\\.gemini\\antigravity-ide\\brain\\95ecc268-539c-4969-8451-6f480d4f8421";

async function capture() {
  console.log("Launching Edge headless browser...");
  const browser = await puppeteer.launch({
    executablePath: edgePath,
    headless: true,
    defaultViewport: { width: 1440, height: 900, deviceScaleFactor: 2 },
    args: ["--no-sandbox", "--disable-gpu"],
  });

  const page = await browser.newPage();
  console.log("Navigating to http://localhost:3000 ...");
  await page.goto("http://localhost:3000", { waitUntil: "networkidle0" });
  await new Promise((r) => setTimeout(r, 1500));

  // 1. Capture Macro Telemetry Bar
  console.log("Capturing Macro Telemetry Bar...");
  await page.evaluate(() => {
    const el = document.getElementById("telemetry");
    if (el) el.scrollIntoView({ behavior: "instant", block: "center" });
  });
  await new Promise((r) => setTimeout(r, 600));
  const shot1 = path.join(artifactDir, "enhanced-11-telemetry.png");
  await page.screenshot({ path: shot1 });
  fs.copyFileSync(shot1, path.join(__dirname, "../public/enhanced-11-telemetry.png"));

  // 2. Open Case Study Drawer from #work
  console.log("Opening Case Study Executive Drawer from #work...");
  await page.evaluate(() => {
    const work = document.getElementById("work");
    if (work) work.scrollIntoView({ behavior: "instant", block: "center" });
  });
  await new Promise((r) => setTimeout(r, 600));

  // Click on the first case study card
  await page.evaluate(() => {
    const cards = document.querySelectorAll("#work [class*='cursor-pointer']");
    if (cards.length > 0) {
      cards[0].click();
    }
  });
  await new Promise((r) => setTimeout(r, 800));
  const shot3 = path.join(artifactDir, "enhanced-13-case-drawer.png");
  await page.screenshot({ path: shot3 });
  fs.copyFileSync(shot3, path.join(__dirname, "../public/enhanced-13-case-drawer.png"));

  // Close drawer
  await page.keyboard.press("Escape");
  await new Promise((r) => setTimeout(r, 600));

  // 3. Capture Boardroom Endorsements Section
  console.log("Capturing Boardroom Endorsements Section...");
  await page.evaluate(() => {
    const end = document.getElementById("endorsements");
    if (end) end.scrollIntoView({ behavior: "instant", block: "center" });
  });
  await new Promise((r) => setTimeout(r, 800));
  const shot4 = path.join(artifactDir, "enhanced-14-endorsements.png");
  await page.screenshot({ path: shot4 });
  fs.copyFileSync(shot4, path.join(__dirname, "../public/enhanced-14-endorsements.png"));

  // 4. Capture Advisory FAQ Section
  console.log("Capturing FAQ & Governance Section...");
  await page.evaluate(() => {
    const faq = document.getElementById("faq");
    if (faq) faq.scrollIntoView({ behavior: "instant", block: "center" });
  });
  await new Promise((r) => setTimeout(r, 800));
  const shot5 = path.join(artifactDir, "enhanced-15-faq.png");
  await page.screenshot({ path: shot5 });
  fs.copyFileSync(shot5, path.join(__dirname, "../public/enhanced-15-faq.png"));

  console.log("All targeted screenshots captured successfully!");
  await browser.close();
}

capture().catch(err => {
  console.error("Capture failed:", err);
  process.exit(1);
});
