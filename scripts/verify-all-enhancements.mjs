import puppeteer from "puppeteer-core";
import path from "node:path";

async function verifyAll() {
  const edgePath = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
  
  const browser = await puppeteer.launch({
    executablePath: edgePath,
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-gpu"],
  });
  
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
  
  console.log("Navigating to http://localhost:3000...");
  await page.goto("http://localhost:3000", { waitUntil: "networkidle0", timeout: 30000 });
  await new Promise((r) => setTimeout(r, 2200));
  
  // 1. Hero
  await page.screenshot({ path: path.resolve("public/enhanced-01-hero.png") });
  console.log("Captured enhanced hero");

  // 2. About
  await page.evaluate(() => document.getElementById("about")?.scrollIntoView());
  await new Promise((r) => setTimeout(r, 500));
  await page.screenshot({ path: path.resolve("public/enhanced-02-about.png") });
  console.log("Captured enhanced about");

  // 3. Services
  await page.evaluate(() => document.getElementById("services")?.scrollIntoView());
  await new Promise((r) => setTimeout(r, 500));
  await page.screenshot({ path: path.resolve("public/enhanced-03-services.png") });
  console.log("Captured enhanced services");

  // 4. Working Capital Liberation Simulator
  await page.evaluate(() => document.getElementById("simulator")?.scrollIntoView());
  await new Promise((r) => setTimeout(r, 600));
  await page.screenshot({ path: path.resolve("public/enhanced-04-simulator.png") });
  console.log("Captured enhanced simulator");

  // 5. Case Studies (Work)
  await page.evaluate(() => document.getElementById("work")?.scrollIntoView());
  await new Promise((r) => setTimeout(r, 500));
  await page.screenshot({ path: path.resolve("public/enhanced-05-work.png") });
  console.log("Captured enhanced work");

  // 6. Credentials
  await page.evaluate(() => document.getElementById("credentials")?.scrollIntoView());
  await new Promise((r) => setTimeout(r, 500));
  await page.screenshot({ path: path.resolve("public/enhanced-06-credentials.png") });
  console.log("Captured enhanced credentials");

  // 7. Journal
  await page.evaluate(() => document.getElementById("journal")?.scrollIntoView());
  await new Promise((r) => setTimeout(r, 500));
  await page.screenshot({ path: path.resolve("public/enhanced-07-journal.png") });
  console.log("Captured enhanced journal");

  // 8. Engagements (Ministerial Consultation)
  await page.evaluate(() => document.getElementById("engagements")?.scrollIntoView());
  await new Promise((r) => setTimeout(r, 500));
  await page.screenshot({ path: path.resolve("public/enhanced-08-engagements.png") });
  console.log("Captured enhanced engagements");

  // 9. Contact
  await page.evaluate(() => document.getElementById("contact")?.scrollIntoView());
  await new Promise((r) => setTimeout(r, 500));
  await page.screenshot({ path: path.resolve("public/enhanced-09-contact.png") });
  console.log("Captured enhanced contact");

  // 10. Open Executive Dossier Modal
  await page.evaluate(() => window.dispatchEvent(new CustomEvent("open-dossier")));
  await new Promise((r) => setTimeout(r, 600));
  await page.screenshot({ path: path.resolve("public/enhanced-10-dossier-modal.png") });
  console.log("Captured enhanced dossier modal");

  // 11. Close Dossier & Test Mobile Viewport (iPhone 14 Pro: 393 x 852)
  await page.keyboard.press("Escape");
  await new Promise((r) => setTimeout(r, 300));
  await page.setViewport({ width: 393, height: 852, deviceScaleFactor: 2 });
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise((r) => setTimeout(r, 500));
  await page.screenshot({ path: path.resolve("public/enhanced-11-mobile-hero.png") });
  console.log("Captured enhanced mobile hero");

  await page.evaluate(() => document.getElementById("simulator")?.scrollIntoView());
  await new Promise((r) => setTimeout(r, 500));
  await page.screenshot({ path: path.resolve("public/enhanced-12-mobile-simulator.png") });
  console.log("Captured enhanced mobile simulator");

  await browser.close();
  console.log("All verifications complete!");
}

verifyAll().catch((err) => {
  console.error("Verification error:", err);
  process.exit(1);
});
