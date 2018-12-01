
module.exports = ((req, res, next)=>{
    if (req.session.isAdmin) {
        next();
    }
    res.redirect("/login");
});