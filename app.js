const express = require('express');
const app = express();
const { contact } = require('./contactController');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.post('/contact', contact);

module.exports = app;
