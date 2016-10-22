const AppDispatcher = require("../dispatcher/AppDispatcher");
const Constants = require("../constants/Constants");

module.exports = {

	// Functions for the question
  	updateQuestion(question) {
	    AppDispatcher.dispatch({
	      	type: QuestionConstants.UPDATE_QUESTION,
	      	question
	    });
  	},

  	getQuestion() {
	    AppDispatcher.dispatch({
	      	type: QuestionConstants.GET_QUESTION
	    });
  	},

  	// Functions for the answers
  	updateAnswer(id, text) {
	    AppDispatcher.dispatch({
	      	type: AnswersConstants.UPDATE_ANSWER,
	      	id,
	      	text
	    });
  	},

  	getAnswers() {
	    AppDispatcher.dispatch({
	      	type: AnswersConstants.GET_ANSWERS
	    });
  	}
};