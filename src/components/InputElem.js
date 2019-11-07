import React, { useState } from 'react';

function InputElem({saveElem, editElem, changeActiveInput, index, category}) {
	
	const [inputTitle, setInputTitle] = useState(editElem !== undefined ? category[index].title : '');
	const [inputAmount, setInputAmount] = useState(editElem !== undefined ? category[index].amount : '');

	const inputTitleHandler = (event) => setInputTitle(event.target.value);
	const inputAmountHandler = (event) => setInputAmount(event.target.value);

	const addSave = () => {
		editElem !== undefined ? 
		editElem (index, {title: inputTitle, amount: inputAmount}) :
		saveElem({title: inputTitle, amount: inputAmount});
		changeActiveInput();
	}
	return (
		<>
			<input type='text' value={inputTitle} placeholder='Enter title' onChange={inputTitleHandler} />
			<input type='number' value={inputAmount} placeholder='Enter amount' onChange={inputAmountHandler} />
			<button type='button' onClick={addSave}>Save</button>
			<button type='button' onClick={changeActiveInput}>Сancel</button>
		</>
	);
}
export default InputElem;