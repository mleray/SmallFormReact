const AppDispatcher = require("../dispatcher/AppDispatcher");
const Constants = require("../constants/Constants");
const EventEmitter = require("events").EventEmitter;
const assign = require("object-assign");

/* Initial state
** In answers, each string represents the text of the answer
** In results, each number represents the number of times the corresponding answer has been sent
** For instance, [2, 0, 4] means that answer 1 has been sent 2 times, answer 2: never and answer 3: 4 times.
*/  
let _state = {
	question: "",
	answers: ["","",""],
	results: [0,0,0]
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

	// Returns the whole state
	getState() {
		return _state;
	},

	// Resets the state to initial state
	reset() {
		_state = {
			question: "",
			answers: ["","",""],
			results: [0,0,0]
		}; 	
	},

	// Returns the current question
	getQuestion() {
	    return _state.question;
	},

	// Updates the question (and resets the results)
	updateQuestion(question) {
	    _state.question = question;
	    _state.results = [0,0,0];
	},

	// Returns the current answers
	getAnswers() {
	    return _state.answers;
	},

	// Updates one answer by id and text (and resets the results)
	updateAnswer(id, text) {
	    _state.answers[id] = text;
	    _state.results = [0,0,0];
	},

	// Updates results when sending an answer
	sendAnswer(id) {
	    _state.results[id]++;
	},

	// Returns the current results
	getResults() {
	    return _state.results;
	}
});

// Register actions
AppDispatcher.register(action => {

    switch(action.type) {

    	case Constants.GET_STATE:
    		Store.getState();
    		break;

    	case Constants.RESET:
    		Store.reset();
    		break;

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

        case Constants.SEND_ANSWER:
            Store.sendAnswer(action.id);
            Store.emitChange();
            break;

        case Constants.GET_RESULTS:
            Store.getResults();
            break;

        default:
        	return true;
    }
    return true;
}); 


module.exports = Store;