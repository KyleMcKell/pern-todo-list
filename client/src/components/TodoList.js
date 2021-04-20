import {
	Paper,
	TableCell,
	TableContainer,
	Table,
	TableHead,
	TableRow,
	makeStyles,
	TableBody,
} from "@material-ui/core";
import React from "react";
import { v4 as uuid } from "uuid";
import TodoRow from "./TodoRow";

const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
	descriptionCell: {
		width: "100%",
	},
});

export default function ListTodos({ setRefetchQuery, todos }) {
	const classes = useStyles();

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
						<TodoRow
							setRefetchQuery={setRefetchQuery}
							todo={todo}
							key={uuid()}
						/>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
