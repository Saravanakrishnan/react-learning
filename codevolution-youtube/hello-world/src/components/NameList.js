import React from 'react';

function NameList(props) {
	const persons = [
		{
			id: 1,
			name: 'Bruce',
			age: 30,
			skill: 'React'
		},
		{
			id: 2,
			name: 'Clark',
			age: 25,
			skill: 'Angular'
		},
		{
			id: 3,
			name: 'Diana',
			age: 28,
			skill: 'Vue'
		}
	];
	const personList = persons.map(person => (
			<h2>
				I am {person.name}. I am {person.age} old. I know {person.skill}.
			</h2>
		)
	);
	return <div>{personList}</div>;
	// const names = [, 'Clark', 'Diana'];
	// const nameList = names.map(name => <h2>{name}</h2>);
	// return <div>{nameList}</div>;
}

export default NameList;
