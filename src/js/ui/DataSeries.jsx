import React, { PropTypes, Component } from "react";
import Bar from "./Bar";

class DataSeries extends Component {
  
    render() {

        const { data, height, width, color } = this.props;

        // Set up domain and range for y
        const y = d3.scaleLinear()
            .domain([0, d3.max(data)])
            .range([0, height]);

        // Set up domain and range for x
        const x = d3.scaleBand()
            .domain([1, 2, 3])
            .range([0, width]);

        // Generate bars for the chart
        const bars = data.map((point, i) => {
            return (
                <Bar 
                    height={y(point)}
                    width={0.8 * x.bandwidth()}
                    offset={x(i+1)} // i+1 because i is in [0,1,2] but the values for x are in [1,2,3]
                    availableHeight={height} 
                    color={color} 
                    key={i} 
                />
            )
        });

        return ( 
            <g>{bars}</g> 
        );
    }
};

DataSeries.propTypes = {
    data: PropTypes.array,
    color: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number
};

DataSeries.defaultProps = {
    data: []
};

module.exports = DataSeries;