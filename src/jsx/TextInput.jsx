import React, { PropTypes, Component } from "react";
import { findDOMNode } from "react-dom";

class TextInput extends Component {

	get value() {
		if (!this._input) return "";
		return findDOMNode(this._input).value;
	}

	render() {
		const {
			name: _name,
			type,
			placeholder
		} = this.props;

		return (
			<input
				ref={elem => { this._input = elem; }}
				type={type}
				name={_name}
				placeholder={placeholder}
			/>
		);
	}
}

TextInput.propTypes = {
	type: PropTypes.string,
	name: PropTypes.string,
	placeholder: PropTypes.string
};

TextInput.defaultProps = {
	type: "text",
	name: "textInput"
};

export default TextInput;