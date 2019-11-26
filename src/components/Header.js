import React from 'react';
import Menu from './Menu';

function Header(props) {
	return (
		<header>
			<div className='wrap'>

				<div className='logo'>
					Count<span>.me</span>
				</div>

				<Menu />
			</div>
		</header>
	);
}

export default Header;