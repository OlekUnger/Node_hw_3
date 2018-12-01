const db = require('../models/db');

module.exports.login = (req, res)=>{
    res.status(200).render('pages/login',{})
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
            res.status(401).render('pages/login', {msgslogin: 'Пароли не совпадают'})
        }
    } else {
        res.status(404).render('pages/login', {msgslogin: 'Пользователь не найден'})
    }
};