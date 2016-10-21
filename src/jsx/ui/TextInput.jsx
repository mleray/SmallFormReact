import React, { PropTypes, Component } from "react";
import { findDOMNode } from "react-dom";
import cn from "classnames";

class TextInput extends Component {

	getValue() {
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
				className={cn(className, "textInput")}
			/>
		);
	}
}

TextInput.propTypes = {
	type: PropTypes.string,
	name: PropTypes.string,
	placeholder: PropTypes.string,
	className: PropTypes.string,
	disabled: PropTypes.bool
};

TextInput.defaultProps = {
	type: "text",
	name: "textInput"
};

export default TextInput;