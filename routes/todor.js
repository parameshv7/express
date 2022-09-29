const express = require("express");
const { createTodo, getTodolist } = require("../controllers/todo.js");
const router = express.Router();

router.get("/todos", getTodolist);
router.post("/todo", createTodo);

module.exports = router;
