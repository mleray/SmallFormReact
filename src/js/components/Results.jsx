import React, { Component, PropTypes } from "react";

class Results extends Component {

	render() {
		const { results } = this.props;
		return (
			<div className="panel">
				<h3>Results</h3>
				<p>{results}</p>
			</div>
		);
	}
};

Results.propTypes = {
	results: PropTypes.arrayOf(PropTypes.number)
};

module.exports = Results;