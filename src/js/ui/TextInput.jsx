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
			placeholder,
			className
		} = this.props;

		return (
			<input
				ref={elem => { this._input = elem; }}
				type="text"
				name={_name}
				placeholder={placeholder}
				className={cn(className, "textInput")}
			/>
		);
	}
}

TextInput.propTypes = {
	name: PropTypes.string,
	placeholder: PropTypes.string,
	className: PropTypes.string,
	disabled: PropTypes.bool
};

TextInput.defaultProps = {
	name: "textInput"
};

module.exports =TextInput;