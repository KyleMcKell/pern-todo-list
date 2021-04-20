import React, { useState } from "react";
import {
	Button,
	Modal,
	FormControl,
	InputLabel,
	Input,
	FormHelperText,
} from "@material-ui/core";

export default function TodoEdit({ handleEdit, todo }) {
	const [isOpen, setIsOpen] = useState(false);
	const [updatedDescription, setUpdatedDescription] = useState("");

	const handleOpen = () => {
		setIsOpen(true);
	};

	const handleClose = () => {
		setIsOpen(false);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	const handleChange = (e) => {
		setUpdatedDescription(e.target.value);
	};

	const modalBody = (
		<div>
			<form onSubmit={handleSubmit}>
				<FormControl>
					<InputLabel htmlFor="updated-description">Update Todo</InputLabel>
					<Input
						id="updated-description"
						value={updatedDescription}
						onChange={handleChange}
					/>
					<FormHelperText id="updated-description-helper-text">
						Fix Up Your Todo!
					</FormHelperText>
				</FormControl>
				<FormControl>
					<Button variant="contained" color="primary" type="submit">
						Update
					</Button>
				</FormControl>
			</form>
		</div>
	);

	return (
		<>
			<Button variant="outlined" onClick={handleOpen}>
				Edit
			</Button>
			<Modal open={isOpen} onClose={handleClose}>
				{modalBody}
			</Modal>
		</>
	);
}
