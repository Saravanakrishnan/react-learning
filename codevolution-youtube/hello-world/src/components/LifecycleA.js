import React, {Component} from 'react';

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

	render() {
		console.log('LifeCycleA render');
		return <div> LifeCycleA</div>;
	}

}

export default LifecycleA;
