import React from 'react';

function Profile() {

	return (
		<div className='profile'>

			<div className='profile_photo'>
				<img src='photo.jpg' alt='photo.jpg' />
			</div>

			<div className='profile_text'>
				Hello, <span className='profile_name'>Denis</span>.<br/>
				Now avaliable daily amount is <span className='profile_amount'>100</span>.
			</div>

		</div>
	)
}

export default Profile;