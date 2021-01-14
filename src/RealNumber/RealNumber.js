import React from 'react';
import './RealNumber.scss';
import {useState} from 'react';

function RealNumber() {
	const reg = new RegExp('^[0-9]+$');
	const [isShown, setShown] = useState(true);
	const [value, setValue] = useState('');

	function isValid(event) {
		setValue(event.target.value);
		if (reg.test(event.target.value)) {
			setShown(true);
		}
		else {
			setShown(false);
		}
	}

	return (
		<div className="RealNumber">
			<p>
				The button near the input should be visible only if the input contains <u>only</u> numbers.
				Examples:<br />
				"238764" - <span className="value--valid">valid</span> <br />
				"A13" - <span className="value--invalid">invalid</span>
			</p>

			<input  value={value} type="text" className="text-box" 
			onChange={isValid} />
			{isShown && <button>Submit</button>}
		</div>
	)
}

export default RealNumber;
