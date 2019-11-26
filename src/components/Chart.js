import React from 'react';
import ChartElems from './ChartElems';
import AddButton from './AddButton';
import SortingSelector from './SortingSelector';

function Chart({ chartTitle, elems = [], sortOption, actions, selectedOption, selectedHandler }) {

	let sortedElems = [];

	switch(sortOption) {
			case 'unsorted': 
				sortedElems = [...elems];
				break;
	
			case 'asc': 
				sortedElems = [...elems].sort((a,b) => {
					return Number(a.amount) - Number(b.amount)
				});
				break;
	
			case 'desc': 
				sortedElems = [...elems].sort((a,b) => {
					return Number(b.amount) - Number(a.amount)
				});
				break;
	
			default: 
				sortedElems = [...elems];
		}

	//using second word at LowerCase for chart className identification;
	let chartClass = chartTitle.toLowerCase().split(' ')[1];

	return (
		<div className={`chart ${chartClass}`}>
			<div className='chart_title'>{chartTitle}</div>
			<SortingSelector sortOption={sortOption} actions={actions} />
			<ChartElems elems={sortedElems} actions={actions} />
			<AddButton elems={elems} actions={actions} />
		</div>
	);
}

export default Chart;