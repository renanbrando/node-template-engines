const app = require('express');
const router = app.Router();

router.get('/', (req, res) => {
  res.render('template.ejs', { title: 'Workshop Template Engines', message: 'Hello Devs!', ejsRocks: 'EJS Rocks' });
});

module.exports = router;