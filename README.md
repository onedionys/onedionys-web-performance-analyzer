<h1 align="center">Welcome to One Dionys - Web Performance Analyzer! 👋 </h1>

<p align="center">Functions to analyze and monitor the performance of web applications, identifying and fixing weak points. 💖 </p>

<p align="center">
<img src="https://img.shields.io/github/contributors/onedionys/onedionys-web-performance-analyzer?style=flat-square">
<img src="https://img.shields.io/github/issues/onedionys/onedionys-web-performance-analyzer?style=flat-square">
<img src="https://img.shields.io/github/stars/onedionys/onedionys-web-performance-analyzer?style=flat-square"> 
<img src="https://img.shields.io/github/forks/onedionys/onedionys-web-performance-analyzer?style=flat-square">
<img src="https://img.shields.io/github/last-commit/onedionys/onedionys-web-performance-analyzer.svg?style=flat-square">
<img src="https://img.shields.io/github/languages/code-size/onedionys/onedionys-web-performance-analyzer?style=flat-square">
<img src="https://img.shields.io/github/license/onedionys/onedionys-web-performance-analyzer?style=flat-square">
</p>

## 💾 Requirements

* `Web Browser` - Can be used as an emulator to build applications. Example [Chrome, Firefox, Safari & Opera].
* `Internet` - Because many use CDN and to make it easier to find solutions to all problems.

## 🎯 How To Use

#### Example Syntax

```javascript
const { analyzePagePerformance } = require('web-performance-analyzer');

(async () => {
  const url = 'https://example.com';
  const performanceMetrics = await analyzePagePerformance(url);
  console.log(performanceMetrics);
})();
```

#### Explanation

* The analyzePagePerformance function takes a URL as input and returns various performance metrics of the webpage. It uses Puppeteer to launch a headless Chrome browser and measures performance metrics using the Performance API provided by the browser.

#### Return Value

* `loadTime`: The total time taken for the page to load (in milliseconds).
* You can add more metrics based on your requirements.

## 📆 Release Date

* v1.0.0 : 17 March 2024
* v1.0.1 : 18 March 2024

## 🧑 Author

* Facebook : <a href="https://www.facebook.com/theonedionys"> Oned Ionys</a>
* Instagram : <a href="https://www.instagram.com/onedionys/"> @onedionys</a>
* Twitter : <a href="https://twitter.com/onedionys"> @onedionys</a>
* LinkedIn :  <a href="https://www.linkedin.com/in/onedionys/"> @onedionys</a>

## 📝 License

* Copyright © 2024 One Dionys
* **One Dionys - Web Performance Analyzer is an open source project licensed under the MIT license**

## ☕️ Suppport & Donation

Love One Dionys - Web Performance Analyzer? Support this project by donating or sharing with others in need.

<a href="https://www.buymeacoffee.com/onedionys"><img src="https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black"/> </a>

**Made with ❤️ One Dionys**
