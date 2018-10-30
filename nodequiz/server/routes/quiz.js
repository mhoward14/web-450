var http = require('http');
var express = require('express');
var router = express.Router();
var homeController = requre('../controllers/homeController');
router.get('/quiz/:quizID', homeController.findAllQuestions);

module.exports = router;



var app = express();

 //routes
 app.get('/', function(req, res)
 {
     res.end('Welcome to NodeQuiz.\n');
 });

 app.get('/quiz-selector', function(req, res)
 {
    res.end('Select Your Quiz.\n');
 });

 app.get('/presentations', function(req, res)
{
    res.end('Welcome to the Presentations Page.\n');
});

app.use(function(req, res)
{
    res.statusCode = 404;
    res.end('404!\n');
});

http.createServer(app).listen(3000, function() {
    console.log('Application started on port %s', 3000);
});