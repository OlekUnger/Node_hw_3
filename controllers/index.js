const db= require('../models/db');

module.exports.index = async(req, res)=>{
    let skills = await db.getState().skills || {},
        products = await db.getState().products || [];

    res.status(200).render('pages/index', {skills, products})
};

module.exports.sendMail = (req, res)=>{
    db.get('letters').push(req.body).write();
    res.status(201).redirect('/')
};