import puppeteer from "puppeteer-core";
import path from "node:path";

async function captureAll() {
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
  
  // 1. Hero Viewport
  await page.screenshot({ path: path.resolve("public/rendered-hero-1440x900.png") });
  console.log("Captured hero");

  // 2. Scroll to About
  await page.evaluate(() => document.getElementById("about")?.scrollIntoView());
  await new Promise((r) => setTimeout(r, 600));
  await page.screenshot({ path: path.resolve("public/rendered-about.png") });
  console.log("Captured about");

  // 3. Scroll to Services
  await page.evaluate(() => document.getElementById("services")?.scrollIntoView());
  await new Promise((r) => setTimeout(r, 600));
  await page.screenshot({ path: path.resolve("public/rendered-services.png") });
  console.log("Captured services");

  // 4. Scroll to Work
  await page.evaluate(() => document.getElementById("work")?.scrollIntoView());
  await new Promise((r) => setTimeout(r, 600));
  await page.screenshot({ path: path.resolve("public/rendered-work.png") });
  console.log("Captured work");

  // 5. Scroll to Credentials
  await page.evaluate(() => document.getElementById("credentials")?.scrollIntoView());
  await new Promise((r) => setTimeout(r, 600));
  await page.screenshot({ path: path.resolve("public/rendered-credentials.png") });
  console.log("Captured credentials");

  // 6. Scroll to Engagements (Ministerial Gallery)
  await page.evaluate(() => document.getElementById("engagements")?.scrollIntoView());
  await new Promise((r) => setTimeout(r, 700));
  await page.screenshot({ path: path.resolve("public/rendered-engagements.png") });
  console.log("Captured engagements");

  // 7. Scroll to Contact
  await page.evaluate(() => document.getElementById("contact")?.scrollIntoView());
  await new Promise((r) => setTimeout(r, 600));
  await page.screenshot({ path: path.resolve("public/rendered-contact.png") });
  console.log("Captured contact");

  await browser.close();
  console.log("Done capturing all screenshots");
}

captureAll().catch(console.error);
