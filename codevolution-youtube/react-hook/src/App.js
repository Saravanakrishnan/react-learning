import React from 'react';
import './App.css';
import CounterOne from "./Components/customHook/CounterOne";
import CounterTwo from "./Components/customHook/CounterTwo";

function App() {
	return (
		<div className="App">
			<CounterOne/>
			<CounterTwo/>
		</div>
	);
}

export default App;
