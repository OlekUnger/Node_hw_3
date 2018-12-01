const multer = require('multer');

module.exports = multer({
    storage: multer.diskStorage({
        destination: (req, file, next)=>{
            next(null, 'public/assets/img/products/')
        },
        filename: (req, file, next)=>{
            next(null, file.originalname)
        },
        // fileFilter: (req, file, next)=>{
        //     if(!file) next();
        //
        //     if(file.mimetype === 'image/png' || file.mimetype === 'image/jpeg') {
        //         next(null, true)
        //     } else {
        //         next({msg: 'file is not supported'}, false)
        //     }
        // }
    })
});