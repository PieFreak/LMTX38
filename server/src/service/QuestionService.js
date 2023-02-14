class QuestionService {

    /**
     * getQuestion takes the ID of a question and returns it. 
     * With no input it return all questions.
     * 
     * @param {number} amount 
     * @returns 
     */
    async getQuestions(amount = null) {
        if (amount === null) {
            // Get all questions
            return "Here is all the questions:";
        }
        // validate amount
        // Get that amount of questions
        return `Here are ${amount} questions.`;
    }

}


export function makeQuestionService() {
    return new QuestionService();
}