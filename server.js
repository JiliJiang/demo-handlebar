// ? Dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const hbs = exphbs.create({});
const router = require('./controller/homeroutes');
const apiRouter = require('./controller/userRoutes');
// ? Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3003;

// ? Set Handlebars as the default template engine.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(apiRouter)
app.use(router)
// app.use(require('./controllers/dish-routes'));

// ? Starts the server to begin listening
app.listen(PORT, () => {
  console.log('Server listening on: http://localhost:' + PORT);
});
