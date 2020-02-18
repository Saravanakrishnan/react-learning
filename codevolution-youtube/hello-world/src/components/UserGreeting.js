import React, {Component} from 'react';

class UserGreeting extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isLoggedIn: false
		}
	}

	render() {

		return this.state.isLoggedIn && <div>Welcome SK!!</div>;

		// return (
		// 	this.state.isLoggedIn ?
		// 		(<div>Welcome SK!!</div>) :
		// 		(<div>Welcome Guest!!</div>)
		// );

		// let message;
		//
		// if (this.state.isLoggedIn) {
		// 	message = <div> Welcome SK!!</div>;
		// } else {
		// 	message = <div> Welcome Guest!!</div>;
		// }
		// return message;
	}
}

export default UserGreeting;
