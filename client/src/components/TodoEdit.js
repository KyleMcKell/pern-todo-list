import React, { useState } from "react";
import { Button } from "@material-ui/core";
import TodoEditModal from "./TodoEditModal";

export default function TodoEdit({ handleEdit, todo }) {
	const [isOpen, setIsOpen] = useState(false);

	const handleOpen = () => {
		setIsOpen(true);
	};

	const handleClose = () => {
		setIsOpen(false);
	};

	return (
		<>
			<Button variant="outlined" onClick={handleOpen}>
				Edit
			</Button>
			<TodoEditModal
				isOpen={isOpen}
				handleClose={handleClose}
				handleEdit={handleEdit}
				todo={todo}
			/>
		</>
	);
}
