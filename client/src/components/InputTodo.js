import React, { useState } from "react";
import {
	Button,
	FormControl,
	FormHelperText,
	Input,
	InputLabel,
	makeStyles,
} from "@material-ui/core";
import axios from "axios";

const useStyles = makeStyles(() => ({
	inputForm: {
		marginBottom: "3rem",
		textAlign: "center",
	},
	inputControl: {
		width: "20rem",
	},
}));

export default function InputTodo({ setRefetchQuery }) {
	const [description, setDescription] = useState("");
	const classes = useStyles();

	const handleChange = (e) => {
		setDescription(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			if (description) {
				const body = { description };
				await axios.post("http://localhost:5000/todos", body);
				setRefetchQuery(true);
				setDescription("");
			}
		} catch (err) {
			console.error(err.message);
		}
	};

	return (
		<form onSubmit={handleSubmit} className={classes.inputForm}>
			<FormControl className={classes.inputControl}>
				<InputLabel htmlFor="description">Input Todo</InputLabel>
				<Input
					id="description"
					value={description}
					onChange={handleChange}
					fullWidth={true}
				/>
				<FormHelperText id="description-helper-text">
					What Would You Like To Do?
				</FormHelperText>
			</FormControl>
			<FormControl>
				<Button variant="contained" color="primary" type="submit">
					Add Todo
				</Button>
			</FormControl>
		</form>
	);
}
