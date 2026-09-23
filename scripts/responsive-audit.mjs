import puppeteer from "puppeteer-core";
import path from "node:path";

async function audit() {
  const edgePath = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
  
  const browser = await puppeteer.launch({
    executablePath: edgePath,
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-gpu"],
  });
  
  // 1. Mobile (375x812)
  const mobilePage = await browser.newPage();
  await mobilePage.setViewport({ width: 375, height: 812, deviceScaleFactor: 2, isMobile: true });
  await mobilePage.goto("http://localhost:3000", { waitUntil: "networkidle0", timeout: 30000 });
  await new Promise((r) => setTimeout(r, 2200));

  // Check horizontal overflow
  const hasHorizontalScroll = await mobilePage.evaluate(() => {
    return document.documentElement.scrollWidth > document.documentElement.clientWidth;
  });
  console.log("Mobile has horizontal scroll overflow:", hasHorizontalScroll);

  await mobilePage.screenshot({ path: path.resolve("public/audit-mobile-hero.png") });
  
  // Scroll to engagements
  await mobilePage.evaluate(() => document.getElementById("engagements")?.scrollIntoView());
  await new Promise((r) => setTimeout(r, 500));
  await mobilePage.screenshot({ path: path.resolve("public/audit-mobile-engagements.png") });

  // 2. Tablet (768x1024)
  const tabletPage = await browser.newPage();
  await tabletPage.setViewport({ width: 768, height: 1024, deviceScaleFactor: 2 });
  await tabletPage.goto("http://localhost:3000", { waitUntil: "networkidle0", timeout: 30000 });
  await new Promise((r) => setTimeout(r, 2200));
  await tabletPage.screenshot({ path: path.resolve("public/audit-tablet-hero.png") });

  await browser.close();
  console.log("Responsive audit complete!");
}

audit().catch(console.error);
