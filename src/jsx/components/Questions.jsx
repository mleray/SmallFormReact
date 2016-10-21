import React from "react";
import TextInput from "../ui/TextInput";
import Answer from "./Answer";

const Questions = () => (
	<div className="panel">
		<h3>Questions</h3>
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

export default Questions;