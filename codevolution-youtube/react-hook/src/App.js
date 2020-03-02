import React from 'react';
import './App.css';
import IntervalClassCounter from "./Components/IntervalClassCounter";
import IntervalHookCounter from "./Components/IntervalHookCounter";

function App() {
	return (
		<div className="App">
			<IntervalClassCounter/>
			<IntervalHookCounter/>
		</div>
	);
}

export default App;
