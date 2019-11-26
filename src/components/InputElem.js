import React, { useState } from 'react';

function InputElem({ addElem, editElem, changeActiveInput, id, title, amount }) {

	const [inputTitle, setInputTitle] = useState(editElem !== undefined ? title : '');
	const [inputAmount, setInputAmount] = useState(editElem !== undefined ? amount : '');

	const inputTitleHandler = (event) => setInputTitle(event.target.value);
	const inputAmountHandler = (event) => setInputAmount(event.target.value);

	const newElem = {
		id: Math.floor(Math.random() * 10000),
		title: inputTitle,
		amount: inputAmount,
	};

	const addSave = () => {
		editElem !== undefined ?
			editElem({ id, title: inputTitle, amount: inputAmount })
			: addElem(newElem);
		changeActiveInput();
	}

	const checkLength = () => inputTitle.length === 0 || inputAmount.length === 0 ? true : false;

	return (
		<>
			<input type='text' value={inputTitle} placeholder='Enter title' onChange={inputTitleHandler} autoFocus />
			<button type='button' disabled={checkLength()} onClick={addSave}>Save</button><br />
			<input type='number' value={inputAmount} placeholder='Enter amount' onChange={inputAmountHandler} />
			<button type='button' onClick={changeActiveInput}>Сancel</button>
		</>
	);
}
export default InputElem;