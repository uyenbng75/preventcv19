const path = require('path');
const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const port = 3000;
const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));

//Routes init
route(app);

//Template Engine
app.engine('hbs', handlebars({
  extname: '.hbs',
  helpers: {
    sum: (a, b) => a + b, 
  }
}));
app.set('view engine', 'hbs');

//Set views
app.set('views', path.join(__dirname, 'resources', 'views'));

//Localhost
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
})
