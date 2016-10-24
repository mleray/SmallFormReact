import React, { Component, PropTypes } from "react";
import Radio from "../ui/Radio";
import Actions from "../actions/Actions";

class Answers extends Component {

	onSendAnswer(e) {
		const radios = document.getElementsByName("answers");
		let selected;

		for (let i = 0; i < radios.length; i++) {
		    if (radios[i].checked) {
		        selected = radios[i].value;
		        break;
		    }
		}

		if (!selected) console.debug("No answer selected!");

		Actions.sendAnswer(selected);
		this.props.onChange();
		e.preventDefault(); // Prevents page from reloading on submit
	}

	render() {
		const { question, answers } = this.props;
		return (
			<div className="panel with-border">
				<h4>{question ? question : "No question for now"}</h4>
				<form className="form">
					{answers.map((answer, i) => {
						return (
							<Radio
								key={i}
								name="answers"
								value={i}
								label={answers[i]}
								disabled={!question || !answers[i]}
							/>
						);
					})}
					<button 
						type="submit" 
						className="button" 
						onClick={this.onSendAnswer.bind(this)}
					>
						Send
					</button>
				</form>
			</div>
		);
	}
};

Answers.propTypes = {
	question: PropTypes.string,
	answers: PropTypes.arrayOf(PropTypes.string),
	results: PropTypes.arrayOf(PropTypes.number)
};

module.exports = Answers;