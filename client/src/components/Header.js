import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
	header: {
		margin: "3rem",
	},
}));

export default function Header() {
	const classes = useStyles();

	return (
		<>
			<Typography className={classes.header} variant="h2">
				Pern Todo List
			</Typography>
		</>
	);
}
