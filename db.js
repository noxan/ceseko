var mongoose = require('mongoose');
var db = mongoose.connect('localhost/ceseko');

var TrainingLogSchema = mongoose.Schema({
  username: String,
  content: String,
  trainingDate: {
    type: Date,
    required: true
  },
  creationDate: {
    type: Date,
    default: Date.now,
    required: true
  }
});

var TrainingLog = mongoose.model('TrainingLog', TrainingLogSchema);
