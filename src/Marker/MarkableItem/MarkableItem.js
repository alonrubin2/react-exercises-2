import React from 'react';
import { useState } from 'react';
import './MarkableItem.css'



function MarkableItem(props) {

    const { words, doesInclude } = props;
    const [repWord] = useState([...words]);
    

    return (

        <div>
            {doesInclude === '' ? repWord.map((word, index) => {
                return <li key={index}>{word}</li>
            }) : words.map((word, index) => {
                if (word.includes(doesInclude)) {
                    const newWord = word.replace(doesInclude, `<span>${doesInclude}</span>`);
                    return <li  key={index} dangerouslySetInnerHTML={{__html: newWord } } ></li>
                }
                else {
                    return <li key={index}>{word}</li>;
                }
                
            })}


            
        
        
        </div>
    );
}

export default MarkableItem;
