// questionPaperGenerator.js
const random = require('lodash/random');
const QuestionStore = require('./questionStore');

class QuestionPaperGenerator {
    constructor(questionStore) {
        this.questionStore = questionStore;
    }

    generateQuestionPaper(totalMarks, difficultyDistribution) {
        const questionPaper = [];
        for (const [difficulty, percentage] of Object.entries(difficultyDistribution)) {
            const difficultyMarks = Math.floor((totalMarks * percentage) / 100);
            const questions = this._getRandomQuestions(difficulty, difficultyMarks);
            questionPaper.push(...questions);
        }
        return questionPaper;
    }

    _getRandomQuestions(difficulty, difficultyMarks) {
        const questions = this.questionStore.getQuestionsByDifficulty(difficulty);
        if (questions.length < difficultyMarks) {
            throw new Error(`Not enough ${difficulty} questions in the store.`);
        }
        return questions.slice(0, difficultyMarks);
    }
}

module.exports = QuestionPaperGenerator;
