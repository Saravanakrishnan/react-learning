import React, {useReducer} from 'react';

const initialState = {
	firstCounter: 0
};
const reducer = (currentState, action) => {

	switch (action.type) {
		case 'increment':
			return {firstCounter: currentState.firstCounter + 1 };
		case 'decrement':
			return {firstCounter: currentState.firstCounter  - 1 };
		case 'reset':
			return initialState;
		default:
			return currentState;
	}
};

function CounterTwo() {

	// useReducer(reducer, initialState)
	const [count, dispatch] = useReducer(reducer, initialState);

	return (
		<div>
			<div>count => {count.firstCounter}</div>
			<button onClick={() => dispatch({type: 'increment'})}>Increment</button>
			<button onClick={() => dispatch({type: 'decrement'})}>Decrement</button>
			<button onClick={() => dispatch({type: 'reset'})}>Reset</button>

		</div>
	);
}

export default CounterTwo;
