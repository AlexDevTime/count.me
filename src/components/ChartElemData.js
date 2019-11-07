import React, { useState } from 'react';
import InputElem from './InputElem';

function ChartElemData({ title, amount, category, index, editElem, deleteElem }) {

	const [activeEdit, setActiveEdit] = useState(false);

	const changeActiveEdit = () => setActiveEdit(!activeEdit);

	return (
		<>
			{activeEdit ?
				<InputElem category={category} editElem={editElem} index={index} changeActiveInput={changeActiveEdit} />
				: 
				<>
					{title} - {amount}&nbsp;
					<img src='edit.png' title='Edit' alt='edit' onClick={changeActiveEdit} />&nbsp;
					<img src='delete.png' title='Delete' alt='delete' onClick={() => deleteElem(index)} />
				</>
			}
		</>

	)
}

export default ChartElemData;