const express = require('express');
const sliderController = require('../controller/sliderController');

const router = express.Router();

router.post('/add', sliderController.addSlider);
router.get('/get', sliderController.getSlider);

module.exports = router;
