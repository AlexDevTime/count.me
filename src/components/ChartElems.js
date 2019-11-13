import React from 'react';
import Percent from './Percent';
import ChartElemData from './ChartElemData';

function ChartElem({ elems, actions }) {

	if (elems.length === 0) {
		return <div className='chart__elems no_items'>No add items</div>
	}

	return (
		<div className='chart__elems'>
			<ul>
				{elems.map(({ id, title, amount }) => (
					<li key={id}>
						<ChartElemData
							elems={elems}
							actions={actions}
							id={id}
							title={title}
							amount={amount}
						/>
						<Percent elems={elems} amount={amount} />
					</li>
				))}
			</ul>
		</div>
	);
}

export default ChartElem;