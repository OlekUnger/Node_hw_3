const express = require('express');
const router = express.Router();
const controller = require('../controllers/admin');
const upload = require('../middleware/upload');
const isAdmin = require('../middleware/auth');

router.get('/', isAdmin, controller.admin);
router.post('/skills', controller.setSkills);
router.post('/upload', upload, controller.createProduct);

module.exports = router;