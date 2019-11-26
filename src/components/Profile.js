import React from 'react';
import photo_img from '../img/photo.jpg';

function Profile({name, income = [], expenses = []}) {

	const total = (arr) => arr.reduce((sum, current) => sum + Number(current.amount), 0);

	return (
		<div className='profile'>

			<div className='profile_photo'>
				<img src={photo_img} alt='My_photo' />
			</div>

			<div className='profile_text'>
				Hello, <span className='profile_name'>{name}</span>.<br/>
				<span style={{fontSize:'16px', color: '#484848'}}>
					total income: <span className='profile_income'>&#36;{total(income)}</span><br/>
	total expenses: <span className='profile_expenses'>&#36;{total(expenses)}</span><br/>
				</span>
			</div>

		</div>
	)
}

export default Profile;