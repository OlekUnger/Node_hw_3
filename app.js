const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const loginRoutes = require('./routes/login');
const adminRoutes = require('./routes/admin');
const homeRoutes = require('./routes/index');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/login', loginRoutes);
app.use('/admin', adminRoutes);
app.use('/', homeRoutes);

app.use((req, res, next) => {
    res
        .status(404)
        .json({ err: '404', message: 'Not found' });
});

app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).json({ err: '500', message: err.message });
});

module.exports = app;