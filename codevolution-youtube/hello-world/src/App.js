import React from 'react';
import './App.css';
import ClickCounterTwo from "./components/ClickCounterTwo";
import HoverCounterTwo from "./components/HoverCounterTwo";
import User from "./components/User";

function App() {
	return (
		<div className="App">
			<ClickCounterTwo/>
			<HoverCounterTwo/>
			<User name={(isLoggedIn) => isLoggedIn ? 'SK' : 'Guest'}/>
		</div>
	);
}

export default App;
