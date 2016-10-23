import React, { Component } from "react";
import ReactDOM from "react-dom";
import Questions from "./components/Questions";
import Answers from "./components/Answers";
import Results from "./components/Results";
import Store from "./stores/Store";

const getState = () => (
  	{
    	question: Store.getQuestion(),
    	answers: Store.getAnswers(),
    	results: Store.getResults()
  	}
);

class App extends Component {

	constructor() {
		super();
    	this.state = getState();
    	this._onChange = this._onChange.bind(this);
  	}

  	componentDidMount() {
    	Store.addChangeListener(this._onChange);
  	}

  	componentWillUnmount() {
    	Store.removeChangeListener(this._onChange);
  	}

	_onChange() {
    	this.setState(getState());
  	}

	render() {

		const { question, answers, results } = this.state;

		return (
			<div>
				<h1>Upinion coding challenge</h1>
				<div className="panels">
					<Questions 
						onChange={this._onChange}
						question={question}
						answers={answers}
					/>
					<Answers 
						question={question}
						answers={answers}
						onChange={this._onChange}
					/>
					<Results results={results}/>
				</div>
			</div>
		);
	}
};

ReactDOM.render(
    <App />,
    document.querySelector(".root")
);