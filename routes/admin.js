const express = require('express');
const router = express.Router();
const controller = require('../controllers/admin');

router.get('/', controller.admin);
router.post('/skills', controller.setSkills);
router.post('/upload', controller.uploadFile);

module.exports = router;