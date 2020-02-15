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
				<button onClick={() => this.increment()}>Increment</button>
			</div>
		);
	}

	increment() {
		this.setState({
			count: this.state.count + 1
		});
		console.log(this.state.count);
	}
}

export default Counter;
