import React from "react";
import { TableRow, TableCell, Button } from "@material-ui/core";
import axios from "axios";
import TodoEdit from "./TodoEdit";

export default function TodoRow({ todo, setRefetchQuery }) {
	const handleDelete = async (todo) => {
		try {
			const { todo_id: id } = todo;
			await axios.delete(`http://localhost:5000/todos/${id}`);
			setRefetchQuery(true);
		} catch (err) {
			console.error(err.message);
		}
	};

	const handleEdit = async (todo, description) => {
		try {
			if (description) {
				const { todo_id: id } = todo;
				const body = { description };
				axios.put(`http://localhost:5000/todos/${id}`, body);
				setRefetchQuery(true);
			}
		} catch (err) {
			console.error(err.message);
		}
	};

	return (
		<TableRow>
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
