import React from 'react';

const Hello = () => {
	// return (
	// 	<div>
	// 		<h1>Hello SK.</h1>
	// 	</div>
	// );

	// return React.createElement('div', null, 'h1', 'Hello SK.');
	return React.createElement(
		'div',
		{id: 'hello', className: 'dummyClass'},
		React.createElement('h1', null, 'Hello SK.'));
};

export default Hello;
