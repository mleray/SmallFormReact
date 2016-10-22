const AppDispatcher = require("../dispatcher/AppDispatcher");
const AnswersConstants = require("../constants/AnswersConstants");

module.exports = {

  	updateAnswers(answers) {
	    AppDispatcher.dispatch({
	      	actionType: AnswersConstants.UPDATE_ANSWERS,
	      	answers
	    });
  	},

  	getAnswers() {
	    AppDispatcher.dispatch({
	      	actionType: AnswersConstants.GET_ANSWERS
	    });
  	}
};