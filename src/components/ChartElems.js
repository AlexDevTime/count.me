import React from 'react';
import Percent from './Percent';
import ChartElemData from './ChartElemData';

function ChartElem({ category, editElem, deleteElem }) {
	
	if (category.length === 0) {
		return <div className='chart__elems'>No add items</div>
	}

	return (
		<div className='chart__elems'>
			<ul>
				{category.map(({ title, amount }, index, array) => (
					<li key={title}>
						<ChartElemData
							editElem={editElem}
							deleteElem={deleteElem}
							title={title}
							amount={amount}
							category={category}
							index={index}
						/>
						<Percent array={array} amount={amount} />
					</li>
				))}
			</ul>
		</div>
	);
}

export default ChartElem;