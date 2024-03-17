const puppeteer = require('puppeteer');

async function analyzePagePerformance(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle2' });

  const performanceMetrics = await page.evaluate(() => {
    const { timing } = window.performance;
    const metrics = {};

    // Calculate page load time
    metrics.loadTime = timing.loadEventEnd - timing.navigationStart;

    // Extract other performance metrics
    // You can add more metrics based on your requirements

    return metrics;
  });

  await browser.close();

  return performanceMetrics;
}

module.exports = { analyzePagePerformance };
