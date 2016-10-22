import React, { Component } from "react";
import TextInput from "../ui/TextInput";
import Answer from "./Answer";
import AnswersStore from "../stores/AnswersStore";
import QuestionStore from "../stores/QuestionStore";

const currentAnswers = AnswersStore.getAnswers();
const currentQuestion = QuestionStore.getQuestion();

const displayAnswers = answers => answers.map((answer, i) => {
	return (
		<Answer 
			key={i}
			name={`answer${i}Input`}
			value={answers[i].text}
			number={i+1}
			placeholder={`Answer ${i+1}`}
		/>
	);
});

const Questions = () => (
	<div className="panel">
		<TextInput 
			value={currentQuestion}
			placeholder="Please write your question here"
			name="questionInput"
			className="question"
		/>
		{displayAnswers(currentAnswers)}
	</div>
);

module.exports = Questions;