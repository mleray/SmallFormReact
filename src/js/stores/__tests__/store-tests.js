jest.mock("../../dispatcher/AppDispatcher");

describe("Store", () => {

	const Constants = require("../../constants/Constants");
	let Store;
	let AppDispatcher;
	let callback;

	// Mock actions 
	const actionUpdateQuestion = {
		type: Constants.UPDATE_QUESTION,
		question: "New question"
	};

	const actionUpdateAnswer = {
		type: Constants.UPDATE_ANSWER,
		id: 0,
		text: "New answer 0"
	};

	const actionSendAnswer = {
		type: Constants.SEND_ANSWER,
		id: 0
	};

	beforeEach(() => {
		AppDispatcher = require("../../dispatcher/AppDispatcher");
		Store = require("../Store");
		callback = AppDispatcher.register.mock.calls[0][0];
	});

	it("should register a callback with the dispatcher", () => {
		expect(AppDispatcher.register.mock.calls.length).toBe(1);
	});

	it("should initialize with initial state", () => {
		const initialState = {
			question: "",
			answers: ["","",""],
			results: [0,0,0]
		};
		const state = Store.getState();
		expect(state).toEqual(initialState);
	});

	describe("getState", () => {
		it("should return the whole current state", () => {
			const initialState = {
				question: "",
				answers: ["","",""],
				results: [0,0,0]
			};
			const state = Store.getState();
			expect(state).toEqual(initialState);
		});
	});

	describe("getQuestion", () => {
		it("should return the current question", () => {
			const question = Store.getQuestion();
			expect(question).toEqual("");
		});
	});

	describe("getAnswers", () => {
		it("should return the current answers", () => {
			const answers = Store.getAnswers();
			expect(answers).toEqual(["","",""]);
		});
	});

	describe("getResults", () => {
		it("should return the current results", () => {
			const results = Store.getResults();
			expect(results).toEqual([0,0,0]);
		});
	});

	describe("updateQuestion", () => {
		it("should update the question with the given text", () => {
			callback(actionUpdateQuestion);
			const question = Store.getQuestion();
			expect(question).toEqual("New question");
		});
	});

	describe("updateAnswer", () => {
		it("should update the right answer with the given text", () => {
			callback(actionUpdateAnswer);
			const answers = Store.getAnswers();
			expect(answers).toEqual(["New answer 0","",""]);
		});
	});

	describe("sendAnswer", () => {
		it("should correctly update the results", () => {
			callback(actionSendAnswer);
			const results = Store.getResults();
			expect(results).toEqual([1,0,0]);
		});
	});
});