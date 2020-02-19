import React from 'react';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import Stylesheet from "./components/Stylesheet";
import Inline from "./components/Inline";
import './appStyles.css';
import styles from './appStyles.module.css';

function App() {
	return (
		<div className="App">

			<h1 className='error'>Error</h1>
			<h1 className={styles.success}>Success</h1>
			<Inline/>
			{/*<Stylesheet primary={true}/>*/}
			{/*<NameList />*/}
			{/*<UserGreeting />*/}
			{/*<ParentComponent />*/}
			{/*<EventBind />*/}
			{/*<FunctionClick/>*/}
			{/*<ClassClick/>*/}
			{/*<Counter />*/}
			{/*<Message />*/}
			{/*<Greet name="John" heroName="Iron Man">*/}
			{/*	<p>This is children props. </p>*/}
			{/*</Greet>*/}
			{/*<Greet name="Flo" heroName="Captain America">*/}
			{/*	<button>Action</button>*/}
			{/*</Greet>*/}
			{/*<Greet name="Ben" heroName="Thor"/>*/}

			{/*<Welcome name="John" heroName="Iron Man"> </Welcome>*/}
			{/*<Welcome name="Flo" heroName="Captain America"> </Welcome>*/}
			{/*<Welcome name="Ben" heroName="Thor"> </Welcome>*/}
			{/*<Hello/>*/}
		</div>
	);
}

export default App;
