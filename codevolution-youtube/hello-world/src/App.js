import React from 'react';
import './App.css';
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
	return (
		<div className="App">
			<ErrorBoundary><Hero heroname="Batman"/></ErrorBoundary>
			<ErrorBoundary><Hero heroname="Superman"/></ErrorBoundary>
			<ErrorBoundary><Hero heroname="Joker"/></ErrorBoundary>
		</div>
	);
}

export default App;
