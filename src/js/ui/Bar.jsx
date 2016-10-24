import React, { PropTypes } from "react";

const Bar = ({ width, height, x, color, y }) => (
	<rect 
		fill={color}
	    width={width} 
	    height={height} 
	    x={x} 
	    y={y}
	/>
);

Bar.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    x: PropTypes.number,
    color: PropTypes.string,
    y: PropTypes.number
};

Bar.defaultProps = {
	width: 0,
    height: 0
};

module.exports = Bar;