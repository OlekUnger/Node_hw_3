const db = require('../models/db');
const path = require('path');

module.exports.admin = (req, res)=>{
    let skills = db.getState().skills || [];
    res.status(200).render('pages/admin', {skills, msgfile: req.flash('msgfile')});
};

module.exports.setSkills = async (req, res)=>{
    await db.set('skills', req.body).write();
    res.status(200).redirect('/admin');
};

module.exports.createProduct = (req, res)=>{
    let product = {
        src: req.file ? `./assets/img/products/${req.file.originalname}` : '',
        name: req.body.name,
        price: req.body.price
    };

    db.get('products').push(product).write();
    req.flash('msgfile', 'Загружено');
    res.status(201).redirect('/admin');
    // res.status(201).render('pages/admin', {msgfile: 'Загружено'});

};