import React from 'react';
import logo from './logo.svg';
import './Toggle.scss';
import { useState } from 'react';




function Toggle() {

	const [isShown, setShown] = useState(true);

	function toggle() {
		setShown(!isShown);
	}

	return (
		<div className="Toggle">
			<p>Make the logo show and disappear when clicking on the button.</p>
			<button onClick={toggle}>Show / Hide</button>
			<div className="Toggle__logo-wrapper">
				{isShown && <img src={logo} alt="logo" />}
			</div>
		</div>
	)
}

export default Toggle;
