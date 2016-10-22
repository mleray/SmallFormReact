const AppDispatcher = require("../dispatcher/AppDispatcher");
const Constants = require("../constants/Constants");
const EventEmitter = require("events").EventEmitter;
const assign = require("object-assign");

// Initial state
// Let's initialize answers'texts to "" so that they appear at init with placeholders
let _state = {
	question: "",
	answers: [ 
		{
			text: ""
		},
		{
			text: ""
		},
		{
			text: ""
		}
	]
};

const Store = assign({}, EventEmitter.prototype, {

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
	    return _state.question;
	},

	// Updates the question
	updateQuestion(question) {
	    _state.question = question;
	},

	// Returns the current answers
	getAnswers() {
	    return _state.answers;
	},

	// Updates one answer by id and text
	updateAnswer(id, text) {
	    _state.answers[id] = { text };
	}
});

// Register actions
AppDispatcher.register(action => {

    switch(action.type) {

        case Constants.GET_QUESTION:
            Store.getQuestion();
            break;

        case Constants.UPDATE_QUESTION:
            Store.updateQuestion(action.question);
            Store.emitChange();
            break;

        case Constants.GET_ANSWERS:
            Store.getAnswers();
            break;

        case Constants.UPDATE_ANSWER:
            Store.updateAnswer(action.id, action.text);
            Store.emitChange();
            break;

        default:
        	return true;
    }
    return true;
}); 


module.exports = Store;