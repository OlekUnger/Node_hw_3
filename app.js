const express = require('express');
const app = express();
const path = require('path');
const loginRoutes = require('./routes/login');
const adminRoutes = require('./routes/admin');
const homeRoutes = require('./routes/home');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

app.use('/login', loginRoutes);
app.use('/admin', adminRoutes);
app.use('/', homeRoutes);

module.exports = app;