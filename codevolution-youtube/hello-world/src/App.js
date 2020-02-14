import React from 'react';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';

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


			<Welcome name="John" heroName="Iron Man"> </Welcome>
			<Welcome name="Flo" heroName="Captain America"> </Welcome>
			<Welcome name="Ben" heroName="Thor"> </Welcome>
			{/*<Hello/>*/}
		</div>
	);
}

export default App;
