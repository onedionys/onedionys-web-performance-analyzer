const { analyzePagePerformance } = require('../src/analyzer');
const assert = require('assert');

describe('Web Performance Analyzer', () => {
  it('should return performance metrics of a webpage', async () => {
    const url = 'https://example.com';
    const performanceMetrics = await analyzePagePerformance(url);
    assert.ok(performanceMetrics);
    assert.strictEqual(typeof performanceMetrics, 'object');
  });
});
