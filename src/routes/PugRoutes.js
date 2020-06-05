const app = require('express');
const pug = require('pug');
const router = app.Router();
const { generatePdf } = require('../services/PdfService');

router.get('/', (req, res) => {
  res.render('template.pug', { title: 'Workshop Template Engines', message: 'Hello Devs!', pugRocks: 'Pug Rocks' });
});

router.get('/pdf', async (req, res) => {
  try {
    const render = pug.compileFile('src/views/template.pug', { 
      title: 'Workshop Template Engines',
      message: 'Hello Devs!',
      pugRocks: 'Pug Rocks'
    });

    const pugTemplate = render({ 
      title: 'Workshop Template Engines',
      message: 'Hello Devs!',
      pugRocks: 'Pug Rocks'
    });

    await generatePdf(pugTemplate, 'pug');
    res.json({ message: 'Pdf created!' });
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;