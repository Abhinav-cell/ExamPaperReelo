// main.js
const Question = require('./question');
const QuestionStore = require('./questionStore');
const QuestionPaperGenerator = require('./questionPaperGenerator');
const QuestionPaperPrinter = require('./questionPaperPrinter');

// Example Usage:
const questionStore = new QuestionStore();

// Adding sample questions to the store
questionStore.addQuestion(new Question("What is the speed of light", "Physics", "Waves", "Easy", 5));
// Add more questions as needed...

const questionPaperGenerator = new QuestionPaperGenerator(questionStore);

// Define the difficulty distribution
const difficultyDistribution = { "Easy": 20, "Medium": 50, "Hard": 30 };

// Generate a question paper with a total of 100 marks
try {
    const generatedPaper = questionPaperGenerator.generateQuestionPaper(100, difficultyDistribution);
    QuestionPaperPrinter.printQuestionPaper(generatedPaper);
} catch (error) {
    console.error(error.message);
}
