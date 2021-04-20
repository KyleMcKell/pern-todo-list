import React, { useState } from "react";
import {
	Button,
	FormControl,
	FormHelperText,
	Input,
	InputLabel,
} from "@material-ui/core";
import axios from "axios";

export default function InputTodo() {
	const [description, setDescription] = useState("");

	const handleChange = (e) => {
		setDescription(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const body = { description };
			await axios.post("http://localhost:5000/todos", body);
			window.location = "/";
		} catch (err) {
			console.error(err.message);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<FormControl>
				<InputLabel htmlFor="description">Input Todo</InputLabel>
				<Input id="description" value={description} onChange={handleChange} />
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
