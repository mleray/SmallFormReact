import React, { PropTypes, Component } from "react";
import Bar from "./Bar";

class DataSeries extends Component {
  
    render() {
        const { data, height, width, color } = this.props;
        // Set up domain and range for x
        const x = d3.scaleLinear()
            .domain([0, d3.max(data)])
            .range([0, width]);

        // Set up domain and range for y
        const y = d3.scaleBand()
            .domain([1,2,3])
            .range([height, 0]);

        // Select svg tag on the page
        const svg = d3.select("svg");

        // Set up the axis
        const xAxis = d3.axisBottom(x)
            .ticks(d3.max(data));
        const yAxis = d3.axisLeft(y);

        // Add the axis on the chart
        svg.append("g")
            .attr("class", "x_axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis);

        svg.append("g")
            .attr("class", "y_axis")
            .call(yAxis);

        svg.append("text")
            .attr("class", "x_label")
            .attr("transform", `translate(${width},${height-2})`)
            .style("text-anchor", "middle")
            .attr("font-size", "10px")
            .text("Votes");
        
        svg.append("text")
            .attr("class", "y_label")
            .attr("transform", "translate(0,-2)")
            .style("text-anchor", "middle")
            .attr("font-size", "10px")
            .text("Answer");


        // Generate bars for the chart
        // d is the number of times the answer has been sent, i is the index
        const bars = data.map((d, i) => {
            return (
                <Bar 
                    width={x(d)}
                    height={0.8 * y.bandwidth()}
                    x={0}
                    y={y(i+1)} // i+1 because i is in [0,1,2] but the anwers"numbers are in [1,2,3] 
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