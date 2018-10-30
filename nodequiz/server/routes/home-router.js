const express = require('express');
const router = express.Router();

let home_controller = require('../controllers/homeController');

router.get('/', home_controller.index);

module.exports = router;

var homeController = require('../controllers/homeController');

router.get('/', homeController.findAllQuestions);

module.exports = router;