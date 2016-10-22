const AppDispatcher = require("../dispatcher/AppDispatcher");
const QuestionConstants = require("../constants/QuestionConstants");
const EventEmitter = require("events").EventEmitter;
const assign = require("object-assign");

// Initial question
let _question = "Good question";

var QuestionStore = assign({}, EventEmitter.prototype, {

	emitChange() {
	    this.emit("change");
	},

	addChangeListener(callback) {
	    this.on("change", callback);
	},

	removeChangeListener(callback) {
	    this.removeListener("change", callback);
	},

	// Returns the current question
	getQuestion() {
	    return _question;
	},

	// Updates the question
	updateQuestion(question) {
	    _question = question;
	}
});

// Register actions
AppDispatcher.register(action => {

    switch(action.actionType) {

        case QuestionConstants.GET_QUESTION:
            QuestionStore.getQuestion();
            break;

        case QuestionConstants.UPDATE_QUESTION:
            QuestionStore.getQuestion(action.question);
            break;

        default:
        	return true;
    }
    return true;
}); 


module.exports = QuestionStore;