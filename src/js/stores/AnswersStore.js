const AppDispatcher = require("../dispatcher/AppDispatcher");
const AnswersConstants = require("../constants/AnswersConstants");
const EventEmitter = require("events").EventEmitter;
const assign = require("object-assign");

// Initial answers
let _answers = [
	{
		checked: false
	},
	{
		text: "Answer 2",
		checked: false
	},
	{
		text: "Answer 3",
		checked: true
	}
];

var AnswersStore = assign({}, EventEmitter.prototype, {

	emitChange() {
	    this.emit("change");
	},

	addChangeListener(callback) {
	    this.on("change", callback);
	},

	removeChangeListener(callback) {
	    this.removeListener("change", callback);
	},

	// Returns the current answers
	getAnswers() {
	    return _answers;
	},

	// Updates the answers
	updateAnswers(answers) {
	    _answers = answers;
	}
});

// Register actions
AppDispatcher.register(action => {

    switch(action.actionType) {

        case AnswersConstants.GET_ANSWERS:
            AnswersStore.getAnswers();
            break;

        case AnswersConstants.UPDATE_ANSWERS:
            AnswersStore.getAnswers(action.answers);
            break;

        default:
        	return true;
    }
    return true;
}); 


module.exports = AnswersStore;