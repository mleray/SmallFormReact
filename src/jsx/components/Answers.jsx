import React from "react";
import Radio from "../ui/Radio";

const Answers = () => (
	<div className="panel with-border">
		<h4>This is the question</h4>
		<Radio
			name="answer1"
			value={1}
			label="Answer 1"
		/>
		<Radio
			name="answer2"
			value={2}
			label="Answer 2"
			checked
		/>
		<Radio
			name="answer3"
			value={3}
			label="Answer 3"
		/>
		<button className="sendButton">Send</button>
	</div>
);

export default Answers;