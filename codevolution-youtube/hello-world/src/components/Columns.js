import React from 'react';

function Columns(props) {
	const items = [];
	return (
		<> {/*Empty tag's are also correct. Does the function of React.Fragment*/}
			{/*{*/}
			{/*	items.map(item => (*/}
			{/*		<React.Fragment key={item.id}>*/}
			{/*			<h1>Title</h1>*/}
			{/*			<p>{item.title}</p>*/}
			{/*		</React.Fragment>*/}
			{/*		)*/}
			{/*	)*/}
			{/*}*/}
			<td>Name</td>
			<td>SK</td>
		</>
	);
}

export default Columns;
