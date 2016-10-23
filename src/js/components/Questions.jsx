import React, { Component, PropTypes } from "react";
import { findDOMNode } from "react-dom";
import TextInput from "../ui/TextInput";
import Answer from "./Answer";
import Actions from "../actions/Actions";

class Questions extends Component {

	onChangeQuestion(event) {
		Actions.updateQuestion(event.target.value);
		this.props.onChange();
	}

	render() {

		const { question, answers, onChange } = this.props;
		return (
			<div className="panel">
				<TextInput 
					value={question}
					placeholder="Please write your question here"
					className="question"
					name="questionInput"
					onChange={this.onChangeQuestion.bind(this)}
				/>
				{
					answers.map((answer, i) => {
						return (
							<Answer 
								key={i}
								value={answers[i].text}
								id={i}
								onChange={onChange}
							/>
						);
					})
				}
			</div>
		);
	}
};

Questions.propTypes = {
	question: PropTypes.string,
	answers: PropTypes.arrayOf(PropTypes.string),
	onChange: PropTypes.func.isRequired
};

module.exports = Questions;