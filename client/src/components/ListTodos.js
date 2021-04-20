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

	const getTodos = async () => {
		try {
			const res = await fetch("http://localhost:5000/todos");
			const data = await res.json();
			setTodos(data);
		} catch (err) {
			console.error(err.message);
		}
	};

	useEffect(() => {
		getTodos();
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
								<Button variant="outlined" color="secondary">
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
