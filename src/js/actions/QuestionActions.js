const AppDispatcher = require("../dispatcher/AppDispatcher");
const QuestionConstants = require("../constants/QuestionConstants");

module.exports = {

  	updateQuestion(question) {
	    AppDispatcher.dispatch({
	      	actionType: QuestionConstants.UPDATE_QUESTION,
	      	question
	    });
  	},

  	getQuestion() {
	    AppDispatcher.dispatch({
	      	actionType: QuestionConstants.GET_QUESTION
	    });
  	}
};