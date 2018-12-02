const multer = require('multer');


let sdf = multer(
    {
        storage: multer.diskStorage({
            destination: (req, file, next) => {
                next(null, 'public/assets/img/products/')
            },
            filename: (req, file, next) => {
                next(null, file.originalname)
            }
        }),

        fileFilter: (req, file, next) => {
            if (!file) next();

            if (file.mimetype === 'image/png' || file.mimetype === 'image/jpeg') {
                next(null, true)
            } else {
                req.flash('msgfile', 'file is not supported');
                next({msg: 'file is not supported'}, false)
            }
        }

    }).single('photo');

module.exports = (req, res, next)=>{
    sdf(req, res, function (err) {
        if (err) {
            res.redirect('/admin');
        }
        else {
            next();
        }
    })
};