import React, { useState } from 'react';
import InputElem from './InputElem';
import edit_img from '../img/edit.png';
import delete_img from '../img/delete.png';

function ChartElemData({ actions, id, title, amount }) {

	const [activeEdit, setActiveEdit] = useState(false);

	const changeActiveEdit = () => setActiveEdit(!activeEdit);

	return (
		<>
			{activeEdit ?
				<InputElem editElem={actions.edit} id={id} title={title} amount={amount} changeActiveInput={changeActiveEdit} />
				:
				<>
					{title} - {amount}&nbsp;
					<img src={edit_img} title='Edit' alt='edit' onClick={changeActiveEdit} />&nbsp;
					<img src={delete_img} title='Delete' alt='delete' onClick={() => actions.delete(id)} />
				</>
			}
		</>

	)
}

export default ChartElemData;