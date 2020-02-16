import React, {Component} from 'react';

// event handlers binding
class EventBind extends Component {
	constructor(props) {
		super(props);
		this.state = {
			message: 'Hello'
		}
		this.clickHandler = this.clickHandler.bind(this); {/*approach 3*/}
	}

	clickHandler() {
		this.setState({
			message: "Good Bye!!"
		});
		console.log(this);
	}

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

