import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

const App = () => {
	return (
		<div className="app" style={{textAlign: "center",  boxShadow: "2px 2px 20px #ececec", backgroundColor: "white"}}>
			<h1 className="app-title" style={{marginBottom: 30}}>My Tasks</h1>
			<AddTodo />
			<TodoList />
		</div>
	);
};

export default App;