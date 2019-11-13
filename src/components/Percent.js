import React from 'react';

function Percent({ elems, amount }) {

	const total = elems.reduce((sum, current) => {
		return sum + Number(current.amount);
	}, 0)

	const percentValue = Math.round(amount * 100 / total);
	const percentLine = 275 * percentValue / 100;

	return (
		<div className='percent'>
			<span style={{width: percentLine}}></span>{percentValue}%
		</div>
	);
}

export default Percent;