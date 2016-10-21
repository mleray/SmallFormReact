import React, { PropTypes, Component } from "react";
import { findDOMNode } from "react-dom";
import cn from "classnames";

class TextInput extends Component {

	get value() {
		if (!this._input) return "";
		return findDOMNode(this._input).value;
	}

	render() {
		const {
			name: _name,
			type,
			placeholder,
			className
		} = this.props;

		return (
			<input
				ref={elem => { this._input = elem; }}
				type={type}
				name={_name}
				placeholder={placeholder}
				className={cn(className, "input")}
			/>
		);
	}
}

TextInput.propTypes = {
	type: PropTypes.string,
	name: PropTypes.string,
	placeholder: PropTypes.string,
	className: PropTypes.string
};

TextInput.defaultProps = {
	type: "text",
	name: "textInput"
};

export default TextInput;