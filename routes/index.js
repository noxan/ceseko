var mongoose = require('mongoose');
var TrainingLog = mongoose.model('TrainingLog');


exports.index = function(req, res) {
  TrainingLog.find(function(err, trainingLogs, count) {
    res.render('index', {
      title: 'ceseko',
      trainingLogs: trainingLogs
    });
  });
};

exports.create = function(req, res) {
  new TrainingLog({
    username: req.body.username,
    content: req.body.content,
    trainingDate: req.body.trainingDate
  }).save(function(err, trainingLog, count) {
    res.redirect('/');
  });
};
