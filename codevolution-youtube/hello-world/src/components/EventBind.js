import React, {Component} from 'react';

// event handlers binding
class EventBind extends Component {
	constructor(props) {
		super(props);
		this.state = {
			message: 'Hello'
		}
		{/* this.clickHandler = this.clickHandler.bind(this); */} {/*approach 3*/}
	}

	// clickHandler() {
	// 	this.setState({
	// 		message: "Good Bye!!"
	// 	});
	// 	console.log(this);
	// }

	clickHandler = () => { // approach 4 - arrow function as class property
		this.setState({
			message: "Good bye!!"
		})
	};

	render() {
		return (
			<div>
				<div>{this.state.message}</div>
				{/*<button onClick={this.clickHandler.bind(this)}>Click</button> */} {/*approach 1*/}
				{/*<button onClick={() => this.clickHandler()}>Click</button>*/}  {/*approach 2*/}
				<button onClick={this.clickHandler}>Click</button>  {/*approach 3*/}
			</div>
		);
	}
}

export default EventBind;

