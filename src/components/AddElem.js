import React, { useState } from 'react';
import InputElem from './InputElem'

function AddElem({ saveElem }) {
	const [activeInput, setActiveInput] = useState(false);

	const changeActiveInput = () => setActiveInput(!activeInput);
	
	return (
		<div className='add_chart'>
			<form>
				{activeInput ? <InputElem saveElem={saveElem} changeActiveInput={changeActiveInput} /> : <button onClick={changeActiveInput}>Add</button>}
			</form>
		</div>
	);
}

export default AddElem;