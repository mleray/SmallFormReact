import React, { Component, PropTypes } from "react";
import Chart from "../ui/Chart";
import DataSeries from "../ui/DataSeries";

class Results extends Component {

	constructor() {
		super();
		this.state = {
			chartHeight: 0,
			chartWidth: 0
		};
	}

	// Initializes the size of the chart depending on the size of its container
	initChartSize() {

		const height = document.getElementById("chart").clientHeight;
    	const width = document.getElementById("chart").clientWidth;

    	this.setState({ 
    		chartHeight: height, 
    		chartWidth: width
    	});
	}

	componentDidMount() {
		this.initChartSize();		
  	}

	render() {

		const { results } = this.props;
		const { chartHeight, chartWidth } = this.state;

		return (
			<div className="panel">
				<h3>{`Results: ${results}`}</h3>
				<div id="chart" className="chart">
					<Chart width={chartWidth} height={chartHeight}>
	        			<DataSeries data={results} width={chartWidth} height={chartHeight} color="lightblue" />
	      			</Chart>
	      		</div>
			</div>
		);
	}
};

Results.propTypes = {
	results: PropTypes.arrayOf(PropTypes.number)
};

module.exports = Results;