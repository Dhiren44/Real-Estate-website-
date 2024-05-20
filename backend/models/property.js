const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  location: String,
  images: [String],
  createdAt: { type: Date, default: Date.now },
});

const Property = mongoose.model('Property', propertySchema);

module.exports = Property;
