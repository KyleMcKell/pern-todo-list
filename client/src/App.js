import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import Header from "./components/Header";
import InputTodo from "./components/InputTodo";
import ListTodos from "./components/TodoList";

const useStyles = makeStyles((theme) => ({
	root: {
		minHeight: "100vh",
		alignItems: "center",
	},
}));

function App() {
	const classes = useStyles();

	return (
		<Grid container direction="column" className={classes.root}>
			<Grid item>
				<Header />
			</Grid>
			<Grid item>
				<InputTodo />
			</Grid>
			<Grid item>
				<ListTodos />
			</Grid>
		</Grid>
	);
}

export default App;
