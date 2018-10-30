var mongoose = require ('mongoose');

var quizSelectionSchema = new mongoose.Schema({
    quizID: String,
    quizName: String,
    questions:[
        {question1: String},
            answers: [
                {answerA: String},
                {answerB: String},
                {answerC: String},
                {answerD: String}],

        {question2: String},
            answers: [
                {answerA: String},
                {answerB: String},
                {answerC: String},
                {answerD: String}],

        {question3: String},
            answers: [
                {answerA: String},
                {answerB: String},
                {answerC: String},
                {answerD: String}],
            
        {question4: String},
            answers: [
                {answerA: String},
                {answerB: String},
                {answerC: String},
                {answerD: String}],

        {question5: String},
            answers: [
                {answerA: String},
                {answerB: String},
                {answerC: String},
                {answerD: String}],

        {question6: String},
            answers: [
                {answerA: String},
                {answerB: String},
                {answerC: String},
                {answerD: String}],

        {question7: String},
            answers: [
                {answerA: String},
                {answerB: String},
                {answerC: String},
                {answerD: String}],

        {question8: String},
            answers: [
                {answerA: String},
                {answerB: String},
                {answerC: String},
                {answerD: String}],

        {question9: String},
            answers: [
                {answerA: String},
                {answerB: String},
                {answerC: String},
                {answerD: String}],

        {question10: String},
            answers: [
                {answerA: String},
                {answerB: String},
                {answerC: String},
                {answerD: String}],
    ],
},
{collection: 'NodeQuiz'});
const quizSelection = module.exports = mongoose.model('quizselection', quizSelectionSchema);

module.exports.getbyID = (quizID, callback) => {
    quizSelection.findOne({"quizID": quizID}, callback);
};


