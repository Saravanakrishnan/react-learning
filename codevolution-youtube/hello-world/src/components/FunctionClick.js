import React from 'react';

// Event Handling example
function FunctionClick() {
	function clickHandler() {
		console.log("Button clicked");
	}

	return (
		<div>
			<button onClick={clickHandler}>Click</button>
		</div>
	)

	// Note: in onClick, the function is passed not function call (missing brackets)
}

export default FunctionClick
