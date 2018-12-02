const db = require('../models/db');

module.exports.login = (req, res)=>{
    res.status(200).render('login',{msgslogin: req.flash('msgslogin')})
};

module.exports.SignIn = (req, res)=>{
    const user = db
        .get('users')
        .find({ email: req.body.email })
        .value();
    if(user){
        if(user.password === req.body.password){
            req.session.isAdmin = true;
            res.status(200).redirect('/admin');
        } else {
            req.flash('msgslogin', 'Пароли не совпадают');
            res.status(401).redirect('/login');
        }
    } else {
        req.flash('msgslogin', 'Пользователь не найден');
        res.status(404).redirect('/login');
    }
};