const express = require('express');
const path = require('path');
const router = require('./routes');
const exphbs = require('express-handlebars');
const nunjucks  = require('nunjucks');

const app = express();

app.set("view engine", "pug");
app.set('view engine', 'ejs');

app.engine('.hbs', exphbs({
  defaultLayout: 'template',
  extname: '.hbs',
  layoutsDir: path.join(__dirname, 'views')
}));
app.set('view engine', '.hbs');

/* nunjucks.configure( path.join(__dirname, 'views'), {
  autoescape: true,
  express   : app
}); */

app.set("views", path.join(__dirname, "views"));

app.use(router);

app.listen(3000, () => {
  console.log('App is running on port 3000');
})