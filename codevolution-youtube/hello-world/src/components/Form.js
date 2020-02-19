import React, {Component} from 'react';

class Form extends Component {

	constructor(props) {
		super(props);
		this.state = {
			username: '',
			comments: '',
			topic: 'react'
		}
	}

	handleUsernameChange = event => {
		console.log(event.target.value);
		this.setState({
			username: event.target.value
		});
	};

	handleCommentsChange = event => {
		console.log(event.target.value);
		this.setState({
			comments: event.target.value
		});
	};

	handleTopicChange = event => {
		console.log(event.target.value);
		this.setState({
			topic: event.target.value
		});
	};

	render() {

		return (
			<form onSubmit={this.handleSubmit}>
				<div>
					<label>Username</label>
					<input
						type='text'
						value={this.state.username}
						onChange={this.handleUsernameChange}
					/>
				</div>
				<div>
					<label>Comments</label>
					<textarea
						value={this.state.comments}
						onChange={this.handleCommentsChange}
					/>
				</div>
				<div>
					<label>Topic</label>
					<select value={this.state.topic} onChange={this.handleTopicChange}>
						<option value='React'>React</option>
						<option value='Angular'>Angular</option>
						<option value='Vue'>Vue</option>
					</select>
				</div>
				<button type='submit'>Submit</button>
			</form>
		);
	}

	handleSubmit = event => {
		alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`);
		event.preventDefault();
	}
}

export default Form;
