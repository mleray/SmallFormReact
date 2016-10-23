import React, { PropTypes } from "react";

const Chart = ({ children, width, height }) => (
	<svg width={width} height={height}>
		{children}
	</svg>
);

Chart.propTypes = {
	children: PropTypes.node,
	width: PropTypes.number,
	height: PropTypes.number
};

module.exports = Chart;