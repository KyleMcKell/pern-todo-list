import React from "react";
import { TableRow, TableCell, Button } from "@material-ui/core";
import axios from "axios";
import TodoEdit from "./TodoEdit";

export default function TodoRow({ todo, key }) {
	const handleDelete = async (todo) => {
		try {
			const { todo_id: id } = todo;
			await axios.delete(`http://localhost:5000/todos/${id}`);
			window.location = "/";
		} catch (err) {
			console.error(err.message);
		}
	};

	const handleEdit = async (todo) => {
		try {
			const { todo_id: id } = todo;
			console.log(id);
		} catch (err) {
			console.error(err.message);
		}
	};

	return (
		<TableRow key={key}>
			<TableCell component="th" scope="row">
				{todo.description}
			</TableCell>
			<TableCell>
				<TodoEdit todo={todo} handleEdit={handleEdit} />
			</TableCell>
			<TableCell>
				<Button
					variant="outlined"
					color="secondary"
					onClick={() => handleDelete(todo)}
				>
					Delete
				</Button>
			</TableCell>
		</TableRow>
	);
}
