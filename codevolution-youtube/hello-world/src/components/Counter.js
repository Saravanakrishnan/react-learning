import React, {Component} from 'react';

class Counter extends Component {

	constructor() {
		super()
		this.state = {
			count: 0
		}
	}

	render() {
		return (
			<div>
				<div>Count - {this.state.count}</div>
				<button onClick={() => this.incrementFive()}>Increment</button>
			</div>
		);
	}

	increment() {
		// this.setState(
		// 	{
		// 		count: this.state.count + 1
		// 	},
		// 	() => {
		// 		console.log('Callback value ', this.state.count)
		// 	});

		this.setState((prevState, props) => ({
				count: prevState.count + 1
				// count: prevState.count + props.addValue // reading values from props
			})
		);
		console.log(this.state.count); // will run before the setState
	}

	incrementFive() {
		this.increment();
		this.increment();
		this.increment();
		this.increment();
		this.increment();
	}
}

export default Counter;
