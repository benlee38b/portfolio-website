const express = require('express');
const app = express();
const { contact } = require('./contactController');
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.static('public'));
app.post('/contact', contact);

app.use('/*', (req, res, next) => {
  next({ status: 404, msg: 'Page Not Found' });
});
require('dotenv').config();

app.use((err, req, res, next) => {
  const { msg = 'Internal Server Error', status = 500 } = err;
  res.status(status).render('error', { status, msg });
});

module.exports = app;
