module.exports.admin = (req, res)=>{
    res.status(200).render('pages/admin',{})
};

module.exports.setSkills = (req, res)=>{
    res.status(200).json({message: 'set skills'})
};

module.exports.uploadFile = (req, res)=>{
    res.status(200).json({message: 'upload file'})
};