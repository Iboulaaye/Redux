import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addTask } from "../redux/tasksSlice";

const AddTodo = () => {
	const [value, setValue] = useState('');

	const dispatch = useDispatch();

	const onSubmit = (event) => {
		event.preventDefault();

		if(value.trim().length === 0)
		{
			alert("Enter a task before adding !!");
			setValue("");
			return;
		}

		dispatch(
			addTask({
				task: value
			})
		);

		setValue("");
	};

	return (
		<div className="add-todo" style={{margin: 30}}>
			<input
				style={{height : 45, border : "1px solid #e4f2f7", borderRadius: 6,  padding : "2px 10px"}}
				type="text"
				className="task-input"
				placeholder="Add task"
				value={value}
				onChange={(event) => setValue(event.target.value)}
			></input>

			<button className="task-button" onClick={onSubmit} style={{backgroundColor: "#05386b", color:"white", color: "white"}}>
				Save
			</button>
		</div>
	);
};

export default AddTodo;
