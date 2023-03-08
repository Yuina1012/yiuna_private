import React from 'react'

export const Todo = ({ todo, toggleTodo }) => {
	const handoleTodoCliock = () => {
		toggleTodo(todo.id);
	};

	return (
		<div>
			<label>
				<input
					type="checkbox"
					checked={todo.completed}
					readOnly
					onChange={handoleTodoCliock}
				/>
			</label>

			{todo.name}
		</div>
	)
}

export default Todo;
