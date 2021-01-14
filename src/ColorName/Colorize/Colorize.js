import React from 'react';
import { useState } from 'react';

function Colorize(props) {
    console.log(props.color)
    return (
        <div>
            <span style={{color: props.color}}>{props.color}</span>
        </div>
    );
}

export default Colorize;
