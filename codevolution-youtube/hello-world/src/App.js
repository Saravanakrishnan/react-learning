import React from 'react';
import './App.css';
import Greet from './components/Greet';
// import Welcome from './components/Welcome';
import Hello from './components/Hello';

function App() {
	return (
		<div className="App">
			<Greet name="John" heroName="Iron Man">
				<p>This is children props. </p>
			</Greet>
			<Greet name="Flo" heroName="Captain America">
				<button>Action</button>
			</Greet>
			<Greet name="Ben" heroName="Thor"/>
			{/*<Welcome/>*/}
			{/*<Hello/>*/}
		</div>
	);
}

export default App;
