exports.index = function(req, res, next) {
  res.json("Home Controller works!")
};

exports.get_quiz = function(req, res, next) {
    console.log(req + " = req");
    
    Quiz.getById(req.body.quizId, function(err, quiz){
      
      console.log(req.body.quizId + " = quiz");
      console.log(quiz.title + " = quizzes")
      
      if(err) return next(err);
      res.json(quiz);
      console.log(res.json + ' is res.body from get_quiz in controller*****');
    })
  };

var quizSelection = require('../models/quiz-selector');

exports.findAllQuizzes = function(req, res, next) {
  quizSelection.find(function (err, quizzes) {
    if (err) return next(err);
    console.log(quizzes);
    res.json(quizzes);
  })
};