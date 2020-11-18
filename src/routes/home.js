const express = require('express');
const router = express.Router();

const homeController = require('../app/controllers/HomeController');

router.use('/:title',homeController.show);
router.get('/', homeController.index);  

module.exports = router;