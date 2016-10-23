import React, { PropTypes } from "react";

const Bar = ({ width, height, offset, color, availableHeight }) => (
	<rect 
		fill={color}
	    width={width} 
	    height={height} 
	    x={offset} 
	    y={availableHeight - height}
	/>
);

Bar.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    offset: PropTypes.number,
    color: PropTypes.string,
    availableHeight: PropTypes.number
};

Bar.defaultProps = {
	width: 0,
    height: 0,
    offset: 0
};

module.exports = Bar;