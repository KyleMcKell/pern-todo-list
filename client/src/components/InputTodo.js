import React, { useState } from "react";
import {
	Button,
	FormControl,
	FormHelperText,
	Input,
	InputLabel,
} from "@material-ui/core";

export default function InputTodo() {
	const [description, setDescription] = useState("hi");

	const handleChange = (e) => {
		setDescription(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const body = { description };
			const res = await fetch("http://localhost:5000/todos", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(body),
			});
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
