import React, {Component} from 'react';
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: 'sk'

		};
		console.log('LifecycleA constructor');
	}

	static getDerivedStateFromProps(props, states) {
		console.log('LifeCycleA getDerivedStateFromProps');
		return null;
	}

	componentDidMount() {
		console.log('LifeCycleA componentDidMount');
	}

	shouldComponentUpdate(nextProps, nextState, nextContext) {
		console.log('LifeCycleA shouldComponentUpdate');
		return true;
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('LifeCycleA getSnapshotBeforeUpdate');
		return null;
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('LifeCycleA componentDidUpdate');
	}

	render() {
		console.log('LifeCycleA render');
		return (
			<div>
				<div> LifeCycleA</div>
				<button onClick={this.changeState}>Change State</button>
				<LifecycleB/>
			</div>
		);
	}

	changeState = () => {
		this.setState({
			name: "hello"
		});
	}
}

export default LifecycleA;
