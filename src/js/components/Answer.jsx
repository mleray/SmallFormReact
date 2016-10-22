import React, { PropTypes } from "react";
import TextInput from "../ui/TextInput";

const Answer = ({ placeholder, name: _name, number, value }) => (
	<div className="answer">
		<span>{`${number}.`}</span>
		<TextInput 
			placeholder={placeholder}
			name={_name}
			value={value}
		/>
	</div>
);

Answer.propTypes = {
	name: PropTypes.string,
	placeholder: PropTypes.string.isRequired,
	number: PropTypes.number.isRequired,
	value: PropTypes.string
};

module.exports = Answer;