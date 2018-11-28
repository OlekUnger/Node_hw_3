const express = require('express');
const router = express.Router();
const controller = require('../controllers/index');

router.get('/', controller.index);
router.post('/', controller.sendMail);

module.exports = router;