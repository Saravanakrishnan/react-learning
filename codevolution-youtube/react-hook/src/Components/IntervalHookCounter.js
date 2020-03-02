import React, {useEffect, useState} from 'react';

function IntervalHookCounter() {
	const [count, setCount] = useState(0);

	const tick = () => {
		setCount(count + 1)
		// setCount(prevCount => prevCount + 1) // will also work
	};

	useEffect(() => {

		function doSomething() {
			console.log("inside do something");
		}

		doSomething();

		const interval = setInterval(tick, 1000);
		return () => {
			clearInterval(interval);
		}
	}, [count])


	return (
		<div>
			{count}
		</div>
	);
}

export default IntervalHookCounter;
