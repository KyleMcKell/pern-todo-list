const express = require("express");
const cors = require("cors");
const app = express();
const pool = require("./db");

//$ MIDDLEWARE
app.use(cors());
app.use(express.json());

//$ ROUTES
//$ create a todo
app.post("/todos", async (req, res) => {
	try {
		const { description } = req.body;
		if (description) {
			const newTodo = await pool.query(
				"INSERT INTO todo (description) VALUES($1) RETURNING *",
				[description]
			);
			res.json(newTodo.rows[0]);
		}
	} catch (err) {
		console.error(err.message);
	}
});

//$ get all todos
app.get("/todos", async (req, res) => {
	try {
		const allTodos = await pool.query("SELECT * FROM todo");
		res.json(allTodos.rows);
	} catch (err) {
		console.error(err.message);
	}
});

//$ get a todo
app.get("/todos/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [
			id,
		]);
		res.json(todo.rows[0]);
	} catch (err) {
		console.error(err.message);
		res.json("Please fetch a valid todo");
	}
});

//$ update a todo
app.put("/todos/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const { description } = req.body;
		if (description) {
			await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2", [
				description,
				id,
			]);
			res.json(`Todo with id ${id} was updated to '${description}'`);
		} else {
			res.json(`Todo wasn't updated, please put in a valid string`);
		}
	} catch (err) {
		console.error(err.message);
	}
});

//$ delete a todo
app.delete("/todos/:id", async (req, res) => {
	try {
		const { id } = req.params;
		await pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);
		res.json(`Todo ${id} was deleted`);
	} catch (err) {
		console.error(err.message);
	}
});

//$ port 5000
app.listen(5000, () => {
	console.log("Server is starting on port 5000");
});
