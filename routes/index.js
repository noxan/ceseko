var mongoose = require('mongoose');
var TrainingLog = mongoose.model('TrainingLog');


exports.index = function(req, res) {
  res.render('index', {
    title: 'ceseko'
  });
};

exports.create = function(req, res) {
  new TrainingLog({
    username: req.body.username,
    content: req.body.conent,
    trainingDate: req.body.trainingDate
  }).save(function(err, trainingLog, count) {
    res.redirect('/');
  });
};
