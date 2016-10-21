import React from "react";
import ReactDOM from "react-dom";
import Questions from "./components/Questions";
import Answers from "./components/Answers";
import Results from "./components/Results";

const App = () => (
	<div>
		<h1>Upinion coding challenge</h1>
		<div className="panels">
			<Questions />
			<Answers />
			<Results />
		</div>
	</div>
);

ReactDOM.render(
    <App />,
    document.querySelector(".root")
);