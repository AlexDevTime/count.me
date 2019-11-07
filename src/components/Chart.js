import React from 'react';
import ChartElems from './ChartElems';
import AddElem from './AddElem';

function Chart({ chartTitle, category, saveElem, editElem, deleteElem }) {

	//using second word at LowerCase for chart className identification;
	let chartClass = chartTitle.toLowerCase().split(' ')[1]; 

	return (
		<div className={`chart ${chartClass}`}>
			<div className='chart__title'>{chartTitle}</div>
			<ChartElems category={category} editElem={editElem} deleteElem={deleteElem}/>
			<AddElem saveElem={saveElem} />
		</div>
	);
}

export default Chart;