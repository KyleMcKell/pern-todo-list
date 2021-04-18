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
		const newTodo = await pool.query(
			"INSERT INTO todo (description) VALUES($1) RETURNING *",
			[description]
		);
		res.json(newTodo.rows[0]);
	} catch (e) {
		console.error(e.message);
	}
});

//$ get all todos
app.get("/todos", async (req, res) => {
	try {
		const allTodos = await pool.query("SELECT * FROM todo");
		res.json(allTodos.rows);
	} catch (e) {
		console.error(e.message);
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
	} catch (e) {
		console.error(e.message);
	}
});

//$ update a todo
app.put("/todos/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const { description } = req.body;
		const updateTodo = await pool.query(
			"UPDATE todo SET description = $1 WHERE todo_id = $2",
			[description, id]
		);
		res.json(`Todo with id ${id} was updated to '${description}'`);
	} catch (e) {
		console.error(e.message);
	}
});

//$ delete a todo
app.delete("/todos/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [
			id,
		]);
		res.json(`Todo ${id} was deleted`);
	} catch (e) {
		console.error(e.message);
	}
});

//$ port 5000
app.listen(5000, () => {
	console.log("Server is starting on port 5000");
});
