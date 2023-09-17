const mongoose = require("mongoose");

const DriverSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  truckName: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const Driver = mongoose.model("Driver", DriverSchema);

module.exports = Driver;
