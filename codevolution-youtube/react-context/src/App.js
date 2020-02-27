import React from 'react';
import './App.css';
import ComponentC from "./Components/ComponentC";
import {UserProvider} from "./Components/UserContent";

function App() {
	return (
		<div className="App">
			{/*<UserProvider value="SK">*/}
				<ComponentC/>
			{/*</UserProvider>*/}
		</div>
	);
}

export default App;
