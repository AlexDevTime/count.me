import React from 'react';

function SortingSelector({sortOption, actions}) {
	return (
		<div className='sorting'>
			<select value={sortOption} onChange={(event) => actions.sorting(event)}>
				<option value='unsorted'>Unsorted</option>
				<option value='asc'>Sort ascending &#8595;</option>
				<option value='desc'>Sort descending &#8593;</option>
			</select>
		</div>
	)
}

export default SortingSelector;