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
import TodoRow from "./TodoRow";

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
						<TodoRow todo={todo} key={uuid()} />
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
