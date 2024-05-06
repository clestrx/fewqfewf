const { toObjectId } = require('../../../helper/common');
const Slider = require('../schema/SliderSchema');

const findSlider = (data) => {
  return new Promise((resolve, reject) => {
    Slider.findOne(data).then(existingSlider => {
      resolve(existingSlider);
    }).catch(error => {
      console.error("Error finding existing Slider:", error);
      reject(error);
    });
  });
}

const findAllSlider = (data) => {
  return new Promise((resolve, reject) => {
    Slider.find(data).then(existingSlider => {
      resolve(existingSlider);
    }).catch(error => {
      console.error("Error finding existing Slider:", error);
      reject(error);
    });
  });
}

const deleteAndAddSlider = (data) => {
  return new Promise((resolve, reject) => {
    Slider.deleteMany({}).then(() => {
      addSlider(data).then(createdSlider => {
        resolve(createdSlider);
      }).catch(error => {
        console.error("Error adding Slider:", error);
        reject(error);
      });
    }).catch(error => {
      console.error("Error deleting Sliders:", error);
      reject(error);
    });
  });
}

const addSlider = (data) => {
  return new Promise((resolve, reject) => {
    Slider.create(data).then(createdSlider => {
      resolve(createdSlider);
    }).catch(error => {
      console.error("Error inserting Slider:", error);
      reject(error);
    });
  });
}

const updateSlider = (where, updateData) => {
  return new Promise((resolve, reject) => {
    Slider.findOneAndUpdate(where, updateData, { new: true })
      .then(updatedSlider => {
        if (!updatedSlider) {
          return reject("Slider not found");
        }
        resolve(updatedSlider);
      })
      .catch(error => {
        console.error("Error updating Slider:", error);
        reject(error);
      });
  });
}

module.exports = {
  findSlider,
  findAllSlider,
  deleteAndAddSlider,
  addSlider,
  updateSlider
}