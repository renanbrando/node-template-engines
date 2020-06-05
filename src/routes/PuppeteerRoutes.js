const app = require('express');
const router = app.Router();
const { screenshot, pdf } = require('../services/PuppeteerService');

router.get('/screenshot', async (req, res) => {
  try {
    await screenshot('screenshot', 'https://imoveis.keycash.io/home/apartamento-itaim-bibi-rua-bandeira-paulista-kcib5033');
    res.json({ message: 'Screenshoot taken!' });
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error.message });
  }
});

router.get('/pdf', async (req, res) => {
  try {
    pdf('puppeteer', 'https://imoveis.keycash.io/home/apartamento-itaim-bibi-rua-bandeira-paulista-kcib5033')
    res.json({ message: 'Pdf created!' });
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;