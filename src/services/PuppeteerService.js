const puppeteer = require('puppeteer');
 
const screenshot = async (fileName, url = 'https://google.com') => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({
    width: 1920,
    height: 5000,
    deviceScaleFactor: 1,
  });
  await page.goto(url);
  await page.goto(url, { waitUntil: 'networkidle2' });
  await page.waitFor(500);
  await page.screenshot({ path: `./tmp/${fileName}.png`, fullPage: true });
  await browser.close();
};

const pdf = async (fileName, url = 'https://google.com') => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({
    width: 1920,
    height: 5000,
    deviceScaleFactor: 1,
  });
  await page.goto(url, { waitUntil: 'networkidle2' });
  await page.waitFor(5000);
  await page.pdf({ path: `./tmp/${fileName}.pdf`, format: 'A4', fullPage: true });
  await browser.close();
}

module.exports = {
  screenshot,
  pdf
}