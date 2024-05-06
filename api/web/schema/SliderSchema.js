const mongoose = require('mongoose');

const SliderSchema = new mongoose.Schema({
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
}, {
  timestamps: true  // Add timestamps option to the schema
});

module.exports = mongoose.model('Slider', SliderSchema);
