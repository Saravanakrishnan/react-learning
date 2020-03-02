import React, {useEffect, useState} from 'react';

function HookMouse() {
	const [x, setX] = useState(0);
	const [y, setY] = useState(0);

	const logMousePosition = e => {
		console.log("Mouse Event");
		setX(e.clientX);
		setY(e.clientY);
	};

	useEffect(() => {
		console.log("useEffect Called");
		window.addEventListener('mousemove', logMousePosition);

		// Clean up code, similar to writing the code in ComponentWillUnmount
		return () => {
			console.log("component unmounting code");
			window.removeEventListener('mousemove', logMousePosition);
		}

	}, []);

	return (
		<div>
			Hooks X - {x} Y - {y}
		</div>
	);
}

export default HookMouse;
