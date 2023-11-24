// questionPaperPrinter.js

class QuestionPaperPrinter {
    static printQuestionPaper(questionPaper) {
        for (const question of questionPaper) {
            console.log(`Question: ${question.question}, Difficulty: ${question.difficulty}, Marks: ${question.marks}`);
        }
    }
}

module.exports = QuestionPaperPrinter;
