const db= require('../models/db');

module.exports.index = async(req, res)=>{
    let skills = await db.get('skills').value() || [],
        products = await db.get('products').value() || [];

    res.status(200).render('pages/index', {skills, products})
};

module.exports.sendMail = (req, res)=>{
    res.status(200).json({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    })
};