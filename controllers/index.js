const db= require('../models/db');

module.exports.index = async(req, res)=>{
    let skills = await db.getState().skills || {},
        products = await db.getState().products || [];

    res.status(200).render('index', {skills, products, msgsemail: req.flash('msgsemail')})
};

module.exports.sendMail = (req, res)=>{
    db.get('letters').push(req.body).write();
    req.flash('msgsemail','Письмо отправлено');
    res.status(201).redirect('/')
};