const AppDispatcher = require("../dispatcher/AppDispatcher");
const Constants = require("../constants/Constants");

module.exports = {

	// Functions for the question
  	updateQuestion(question) {
	    AppDispatcher.dispatch({
	      	type: Constants.UPDATE_QUESTION,
	      	question
	    });
  	},

  	getQuestion() {
	    AppDispatcher.dispatch({
	      	type: Constants.GET_QUESTION
	    });
  	},

  	// Functions for the answers
  	updateAnswer(id, text) {
	    AppDispatcher.dispatch({
	      	type: Constants.UPDATE_ANSWER,
	      	id,
	      	text
	    });
  	},

  	getAnswers() {
	    AppDispatcher.dispatch({
	      	type: Constants.GET_ANSWERS
	    });
  	},

  	// Functions for the results
  	getResults() {
	    AppDispatcher.dispatch({
	      	type: Constants.GET_RESULTS
	    });
  	},

  	sendAnswer(id) {
	    AppDispatcher.dispatch({
	      	type: Constants.SEND_ANSWER,
	      	id
	    });
  	},
};