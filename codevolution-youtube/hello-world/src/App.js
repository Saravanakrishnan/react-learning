import React from 'react';
import './App.css';
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";

function App() {
	return (
		<div className="App">
			<ClickCounter name="SK"/>
			<HoverCounter name="SK"/>
		</div>
	);
}

export default App;
