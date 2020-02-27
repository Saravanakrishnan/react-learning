import React from 'react';

const withCounter = (WrappedComponent, incrementNumber) => {
	class WithCounter extends React.Component {

		constructor(props) {
			super(props);
			this.state = {
				count: 0
			}
		}

		incrementCount = () => {
			this.setState(prevState => {
				return {count: prevState.count + incrementNumber}
			})
		};

		render() {
			console.log(this.props.name); // Printing the props
			return <WrappedComponent
				count={this.state.count}
				incrementCount={this.incrementCount}
				{...this.props} // passing down the remaining props to the New Element
			/>
		}
	}

	return WithCounter
}

export default withCounter;
