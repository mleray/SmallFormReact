import React, { PropTypes } from "react";
import TextInput from "../ui/TextInput";

const Answer = ({ placeholder, name: _name, number }) => (
	<div className="answer">
		<span>{`${number}.`}</span>
		<TextInput 
			placeholder={placeholder}
			name={_name}
		/>
	</div>
);

Answer.propTypes = {
	name: PropTypes.string,
	placeholder: PropTypes.string,
	number: PropTypes.number
};

module.exports = Answer;