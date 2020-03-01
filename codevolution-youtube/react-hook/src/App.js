import React from 'react';
import './App.css';
import HookCounterOne from "./Components/HookCounterOne";
import ClassCounterOne from "./Components/ClassCounterOne";

function App() {
	return (
		<div className="App">
			{/*<ClassCounterOne/>*/}
			<HookCounterOne/>
		</div>
	);
}

export default App;
