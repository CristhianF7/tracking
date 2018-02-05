const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/TrackingClient");

module.exports = mongoose;