const db = require('../models/db');

module.exports.admin = async (req, res)=>{
    let skills = await db.get('skills').value() || [];
    res.status(200).render('pages/admin', {skills});
};

module.exports.setSkills = async (req, res)=>{
    await db.set('skills', req.body).write();
    res.redirect('/admin');
};

module.exports.uploadFile = (req, res)=>{
    res.status(200).json({message: 'upload file'})
};