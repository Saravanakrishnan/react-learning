import React from 'react';
import './App.css';
import CounterTwo from "./components/CounterTwo";
import ClickCounterTwo from "./components/ClickCounterTwo";
import HoverCounterTwo from "./components/HoverCounterTwo";

function App() {
	return (
		<div className="App">
			{/*<ClickCounterTwo/>*/}
			{/*<HoverCounterTwo/>*/}
			{/*<User render={(isLoggedIn) => isLoggedIn ? 'SK' : 'Guest'}/>*/}

			<CounterTwo
				render={(count, incrementCount) => (
					<ClickCounterTwo
						count={count}
						incrementCount={incrementCount}>
					</ClickCounterTwo>)}
			/>
			<CounterTwo
				render={(count, incrementCount) => (
					<HoverCounterTwo
						count={count}
						incrementCount={incrementCount}>
					</HoverCounterTwo>)}
			/>
		</div>
	);
}

export default App;
