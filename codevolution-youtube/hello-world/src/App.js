import React from 'react';
import './App.css';
import Greet from './components/Greet';
// import Welcome from './components/Welcome';
import Hello from './components/Hello';

function App() {
	return (
		<div className="App">
			<Greet name={"John"} heroName={"Iron Man"}/>
			<Greet name={"Flo"} heroName={"Captain America"}/>
			<Greet name={"Ben"} heroName={"Thor"}/>
			{/*<Welcome/>*/}
			{/*<Hello/>*/}
		</div>
	);
}

export default App;
