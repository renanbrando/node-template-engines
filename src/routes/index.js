const router = require('express').Router();
const pug = require('./PugRoutes');
const ejs = require('./EjsRoutes');
const handleBars = require('./HandleBarsRoutes');
const nunjucks = require('./NunjucksRoutes');
const puppeteer = require('./PuppeteerRoutes');

router.use('/pug', pug);
router.use('/puppeteer', puppeteer);
router.use('/ejs', ejs);
router.use('/handlebars', handleBars);
router.use('/nunjucks', nunjucks);

router.get('/', (req, res) => {
  res.json({
    pug: "localhost:3000/pug",
    pugPdf: "localhost:3000/pug/pdf",
    ejs: "localhost:3000/ejs",
    handlebars: "localhost:3000/handlebars",
    nunjucks: "localhost:3000/nunjucks"
  })
});

module.exports = router;