import React from 'react';

const heading = {
	fontSize: '72px',
	color: 'blue'
};

function Inline() {
	return (
		<div>
			<h1 className='error'>Error</h1> {/* will work, as styles is global */}
			{/*<h1 className={styles.success}>Success</h1>*/} {/* will not work, as styles is module specific */}
			<h1 style={heading}>Inline</h1>
		</div>
	);
}

export default Inline;
