import React, { PropTypes, Component } from "react";
import TextInput from "../ui/TextInput";
import Actions from "../actions/Actions";

class Answer extends Component { 

	onChangeAnswer(e) {
		Actions.updateAnswer(this.props.id, e.target.value);
		this.props.onChange();
	}

	render() {

		const { id, placeholder, value } = this.props;
		return (
			<div className="answer">
				<span>{`${id + 1}.`}</span>
				<TextInput 
					name={`answer${id}Input`}
					value={value}
					placeholder={`Answer ${id+1}`}
					onChange={this.onChangeAnswer.bind(this)}
				/>
			</div>
		);
	}
};

Answer.propTypes = {
	id: PropTypes.number.isRequired,
	value: PropTypes.string,
	onChange: PropTypes.func.isRequired
};

module.exports = Answer;