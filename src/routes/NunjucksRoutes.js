const app = require('express');
const router = app.Router();

router.get('/', (req, res) => {
  res.render('template.html', { title: 'Workshop Template Engines', message: 'Hello Devs!', nunjucksRocks: 'Nunjucks Rocks' });
});

module.exports = router;