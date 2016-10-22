import React from "react";
import Radio from "../ui/Radio";
import QuestionStore from "../stores/QuestionStore";
import AnswersStore from "../stores/AnswersStore";

const currentAnswers = AnswersStore.getAnswers();

const displayAnswers = answers => answers.map((answer, i) => {
	return (
		<Radio
			key={i}
			name={`answer${i}`}
			value={i}
			label={answers[i].text}
			checked={answers[i].checked}
		/>
	);
});

const Answers = () => (
	<div className="panel with-border">
		<h4>{QuestionStore.getQuestion()}</h4>
		{displayAnswers(currentAnswers)}
		<button className="sendButton">Send</button>
	</div>
);

module.exports = Answers;