import React, { Component, PropTypes } from "react";
import Radio from "../ui/Radio";
import Store from "../stores/Store";

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

class Answers extends Component {

	render() {
		const { question, answers } = this.props;
		return (
			<div className="panel with-border">
				<h4>{question ? question : "No question for now"}</h4>
				{displayAnswers(answers)}
				<button className="sendButton">Send</button>
			</div>
		);
	}
};

Answers.propTypes = {
	question: PropTypes.string,
	answers: PropTypes.arrayOf(PropTypes.shape({
		text: PropTypes.string
	}))
};

module.exports = Answers;