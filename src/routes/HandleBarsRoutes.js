const app = require('express');
const router = app.Router();

router.get('/', (req, res) => {
  res.render('template.hbs', { title: 'Workshop Template Engines', message: 'Hello Devs!', handleRocks: 'HandleBars Rocks' });
});

module.exports = router;