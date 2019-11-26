import React, { useState } from 'react';

function LoginForm({ setName, actions }) {

	const [inputName, setInputName] = useState('');
	const [inputSallary, setInputSallary] = useState('');

	const inputNameHandler = (event) => setInputName(event.target.value);
	const inputSallaryHandler = (event) => setInputSallary(event.target.value);

	const addEnterInfo = () => {
		setName(inputName);
		actions.add({ id: 0, title: 'Sallary', amount: inputSallary });
	}

	const checkLength = () => inputName.length === 0 || inputSallary.length === 0 ? true : false;

	return (
		<div className='login_form'>
			<form>
				<label>
					<span>Name</span>
					<input type='text' value={inputName} placeholder='Enter your name' onChange={inputNameHandler} autoFocus />
				</label>
				<br />
				<label>
					<span>Sallary</span>
					<input type='number' value={inputSallary} placeholder='Enter your sallary' onChange={inputSallaryHandler} />
				</label>
				<br />
				<button type='button' disabled={checkLength()} onClick={addEnterInfo}>Enter</button>
			</form>
		</div>
	)
}

export default LoginForm;