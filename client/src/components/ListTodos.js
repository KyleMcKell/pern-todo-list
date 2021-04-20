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
	const [todos, setTodos] = useState([
		{ description: "Hi there" },
		{ description: "second one" },
	]);

	return (
		<TableContainer component={Paper}>
			<Table className={classes.table}>
				<TableHead>
					<TableRow>
						<TableCell className={classes.descriptionCell}>Todos</TableCell>
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
