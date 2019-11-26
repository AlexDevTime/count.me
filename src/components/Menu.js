import React, { useState } from 'react';

function Menu() {
	const [showMenu, setShowMenu] = useState(false);

	const toggleMenu = () => setShowMenu(!showMenu)

	const logout = () => {
		localStorage.clear();
		window.location.reload(true);
	}

	return (
		<div className='menu'>
			<div className={`menu_icon ${showMenu && 'menu_icon_close'}`} onClick={toggleMenu}></div>
			<div className='menu_body' style={{ display: showMenu ? 'block' : 'none' }}>
				<div className='menu_body_items'>
					<span className="menu_body_item" onClick={logout}>Logout (delete all data)</span>
				</div>
			</div>
		</div>
	)
}

export default Menu;