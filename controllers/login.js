module.exports.login = (req, res)=>{
    res.status(200).render('pages/login',{})
};

module.exports.SignIn = (req, res)=>{
    res.status(200).json({message: 'enter'});
};