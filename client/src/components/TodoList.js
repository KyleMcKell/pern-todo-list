import {
	Paper,
	TableCell,
	TableContainer,
	Table,
	TableHead,
	TableRow,
	makeStyles,
	TableBody,
	Button,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import axios from "axios";

const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
	descriptionCell: {
		width: "100%",
	},
});

export default function ListTodos() {
	const classes = useStyles();
	const [todos, setTodos] = useState([]);

	const fetchTodos = async () => {
		try {
			const res = await axios.get("http://localhost:5000/todos");
			setTodos(res.data);
		} catch (err) {
			console.error(err.message);
		}
	};

	const handleDelete = async (todo) => {
		try {
			const { todo_id: id } = todo;
			const res = await axios.delete(`http://localhost:5000/todos/${id}`);
		} catch (err) {
			console.error(err.message);
		}
	};

	useEffect(() => {
		fetchTodos();
	}, []);

	return (
		<TableContainer component={Paper}>
			<Table className={classes.table}>
				<TableHead>
					<TableRow>
						<TableCell className={classes.descriptionCell}>Todos</TableCell>
						<TableCell></TableCell>
						<TableCell></TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{todos.map((todo) => (
						<TableRow key={uuid()}>
							<TableCell component="th" scope="row">
								{todo.description}
							</TableCell>
							<TableCell>
								<Button variant="outlined">Edit</Button>
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
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
