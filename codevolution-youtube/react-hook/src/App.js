import React from 'react';
import './App.css';
import ComponentC from "./Components/useContext/ComponentC";

// Step 1:
export const UserContext = React.createContext();

function App() {
	return (
		<div className="App">

			{/*// Step2: Wrap component*/}
			<UserContext.Provider value={'SK'}>
				<ComponentC/>
			</UserContext.Provider>
		</div>
	);
}

export default App;
