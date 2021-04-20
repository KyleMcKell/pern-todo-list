import React, { useState } from "react";
import {
	Modal,
	Paper,
	FormControl,
	InputLabel,
	Input,
	FormHelperText,
	Button,
	makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	updateModal: {
		padding: "2rem",
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%);",
	},
}));

export default function TodoEditModal({
	todo,
	handleEdit,
	isOpen,
	handleClose,
}) {
	const [updatedDescription, setUpdatedDescription] = useState(
		todo.description
	);
	const classes = useStyles();

	const handleSubmit = (e) => {
		e.preventDefault();
		handleEdit(todo, updatedDescription);
	};

	const handleChange = (e) => {
		setUpdatedDescription(e.target.value);
	};

	const modalBody = (
		<Paper elevation={3} className={classes.updateModal}>
			<form onSubmit={handleSubmit}>
				<FormControl>
					<InputLabel htmlFor="updated-description">
						Change To Do Text
					</InputLabel>
					<Input
						id="updated-description"
						value={updatedDescription}
						onChange={handleChange}
					/>
					<FormHelperText id="updated-description-helper-text">
						Changing "{todo.description}"
					</FormHelperText>
				</FormControl>
				<br />
				<FormControl>
					<Button variant="contained" color="primary" type="submit">
						Update
					</Button>
				</FormControl>
			</form>
		</Paper>
	);

	return (
		<Modal open={isOpen} onClose={handleClose}>
			{modalBody}
		</Modal>
	);
}
