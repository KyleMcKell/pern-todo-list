import { Grid, makeStyles } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import InputTodo from "./components/InputTodo";
import ListTodos from "./components/TodoList";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
	root: {
		minHeight: "100vh",
		alignItems: "center",
	},
}));

function App() {
	const classes = useStyles();
	const [refetchQuery, setRefetchQuery] = useState(true);
	const [todos, setTodos] = useState([]);

	const fetchTodos = async () => {
		try {
			setRefetchQuery(false);
			const res = await axios.get("http://localhost:5000/todos");
			console.log(res.data);
			setTodos(res.data);
		} catch (err) {
			console.error(err.message);
			setRefetchQuery(false);
		}
	};

	useEffect(() => {
		if (refetchQuery) {
			fetchTodos();
		}
	}, [refetchQuery]);

	return (
		<Grid container direction="column" className={classes.root}>
			<Grid item>
				<Header />
			</Grid>
			<Grid item>
				<InputTodo setRefetchQuery={setRefetchQuery} />
			</Grid>
			<Grid item>
				<ListTodos todos={todos} setRefetchQuery={setRefetchQuery} />
			</Grid>
		</Grid>
	);
}

export default App;
