const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json()); // middleware to handle JSON data

let todos = []; // In-memory storage

// GET - fetch all todos
app.get("/todos", (req, res) => {
  res.json(todos);
});

// POST - add a new todo
app.post("/todos", (req, res) => {
  const newTodo = { id: todos.length + 1, task: req.body.task };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// PUT - update a todo
app.put("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find(t => t.id === id);
  if (!todo) return res.status(404).json({ error: "Todo not found" });
  
  todo.task = req.body.task;
  res.json(todo);
});

// DELETE - remove a todo
app.delete("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  todos = todos.filter(t => t.id !== id);
  res.json({ message: "Todo deleted" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
