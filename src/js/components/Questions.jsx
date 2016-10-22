import React, { Component } from "react";
import TextInput from "../ui/TextInput";
import Answer from "./Answer";

class Questions extends Component {

	// Set initial state
	constructor() {
	   	super();
	   	this.state = {
	   		question: ""
	   	};
	}

	render() { 
		return (
			<div className="panel">
				<TextInput 
					placeholder="Please write your question here"
					name="questionInput"
					className="question"
				/>
				<Answer 
					number={1}
					placeholder="Answer 1"
					name="answer1Input"
				/>
				<Answer 
					number={2}
					placeholder="Answer 2"
					name="answer2Input"
				/>
				<Answer 
					number={3}
					placeholder="Answer 3"
					name="answer3Input"
				/>
			</div>
		);
	}
}

module.exports = Questions;