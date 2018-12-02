const express = require('express');
const bodyParser = require('body-parser');
const createError = require('http-errors');
const session = require('express-session');
const flash = require('connect-flash');
const cookieParser = require('cookie-parser');
const path = require('path');
const app = express();

const loginRoutes = require('./routes/login');
const adminRoutes = require('./routes/admin');
const homeRoutes = require('./routes/index');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser('secret123'));
app.use(session({
    secret: 'secret123',
    resave: true,
    saveUninitialized: false
}));
app.use(flash());


app.use('/login', loginRoutes);
app.use('/admin', adminRoutes);
app.use('/', homeRoutes);

app.use((req, res, next)=> {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('pages/error', {message: err.message});
});

module.exports = app;