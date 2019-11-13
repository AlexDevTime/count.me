import React, { useState } from 'react';
import InputElem from './InputElem'

function AddButton({ elems, actions }) {
	const [activeInput, setActiveInput] = useState(false);

	const changeActiveInput = () => setActiveInput(!activeInput);

	return (
		<div className='add_chart'>
			<form>
				{activeInput ?
					<InputElem elems={elems} addElem={actions.add} changeActiveInput={changeActiveInput} />
					: <button onClick={changeActiveInput}>Add</button>}
			</form>
		</div>
	);
}

export default AddButton;