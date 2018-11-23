module.exports.home = (req, res)=>{
    res.status(200).render('pages/index',{})
}