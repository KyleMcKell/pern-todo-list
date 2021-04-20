import React from "react";
import {
	Button,
	FormControl,
	FormHelperText,
	Input,
	InputLabel,
} from "@material-ui/core";

export default function InputTodo() {
	return (
		<form>
			<FormControl>
				<InputLabel htmlFor="todo-input">Add a Todo</InputLabel>
				<Input id="todo-input" />
				<FormHelperText id="todo-helper-text">Track a New Todo!</FormHelperText>
			</FormControl>
			<FormControl>
				<Button variant="contained" color="primary">
					Add
				</Button>
			</FormControl>
		</form>
	);
}
