import React, {Component} from 'react';
import ComponentF from "./ComponentF";
import UserContext from "./UserContent";


class ComponentE extends Component {
	static contextType = UserContext;

	render() {
		return <div>
			Component E Context = {this.context}
			<ComponentF/>
		</div>;
	}
}

export default ComponentE;
