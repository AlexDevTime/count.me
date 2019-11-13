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