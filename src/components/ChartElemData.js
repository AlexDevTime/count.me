import React, { useState } from 'react';
import InputElem from './InputElem';

function ChartElemData({ actions, elems, id, title, amount }) {

	const [activeEdit, setActiveEdit] = useState(false);

	const changeActiveEdit = () => setActiveEdit(!activeEdit);

	return (
		<>
			{activeEdit ?
				<InputElem editElem={actions.edit} id={id} title={title} amount={amount} changeActiveInput={changeActiveEdit} />
				:
				<>
					{title} - {amount}&nbsp;
					<img src='edit.png' title='Edit' alt='edit' onClick={changeActiveEdit} />&nbsp;
					<img src='delete.png' title='Delete' alt='delete' onClick={() => actions.delete(id)} />
				</>
			}
		</>

	)
}

export default ChartElemData;