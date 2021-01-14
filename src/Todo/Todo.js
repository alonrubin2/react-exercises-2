import React, { useState } from 'react';
import './Todo.scss';

function Todo() {

	const [item, setItem] = useState('');
	const [itemList, setItemList] = useState([]);

	function submit() {
		if (item === '') return;
		setItemList([...itemList, { task: item, id: itemList.length }]);
		setItem('');
	}

	function deleteItem(index) {
		const filteredList = itemList.filter((item) => item.id !== index)
		setItemList(filteredList);
	}



	return (
		<div className="Todo">
			<form onSubmit={(event) => {
				event.preventDefault();
				submit();
			}}>
				<h3>Todo List:</h3>
				<p>Make a Todo list (add & delete options):</p>
				<input placeholder="Your task..." value={item} onChange={(event) => setItem(event.target.value)} />
				<button type="submit">Add task</button>
			</form>
			<ul>
				{itemList.map((item) => {
					return <li key={item.id}> {item.task} <button onClick={() => deleteItem(item.id)}>Delete</button></li>
				})}
			</ul>

		</div>
	)
}

export default Todo;
