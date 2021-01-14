import React, { useEffect } from 'react';
import './Timer.scss';
import { useState } from 'react';

function Timer() {

	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setSeconds((seconds) => seconds+1)
		}, 1000)
		return () => clearInterval(interval);
	}, [seconds]);

	return (
		<div className="Timer">
			<h3>Timer</h3>
			<p>
				Make a timer that counts the seconds.
				Update it every second.
			</p>
			<div className="Timer__value">{seconds}</div>
		</div>
	)
}

export default Timer;
