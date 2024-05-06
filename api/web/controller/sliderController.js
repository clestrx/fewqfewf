const Joi = require('joi');
const mongoose = require('mongoose');
const { formatErrorMessage, toObjectId } = require('../../../helper/common');
const { deleteAndAddSlider, findAllSlider } = require('../model/sliderModel');

const addSlider = async (req, res) => {
  try {
    const { slides } = req.body;
    const sliderData = await deleteAndAddSlider(slides);
    return res.status(200).json({ status: true, response_code: 200, message: `Slider has been updated`, data: [] });
  } catch (err) {
    console.error(err);
    return res.status(400).json({ status: false, response_code: 400, message: err, data: [] });
  }
};

const getSlider = async (req, res) => {
  try {
    const sliderData = await findAllSlider();
    return res.status(200).json({ status: true, response_code: 200, message: `Slider has been fetched`, data: sliderData });
  } catch (err) {
    console.error(err);
    return res.status(400).json({ status: false, response_code: 400, message: err, data: [] });
  }
};

module.exports = {
  addSlider,
  getSlider
};
