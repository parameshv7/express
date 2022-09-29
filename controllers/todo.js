
const {v4 : uuidv4} = require('uuid')

const userId = uuidv4();
let todos = [];
const getTodolist = (req, res) => {
  res.send(todos);
};
module.exports = getTodolist;
const createTodo = (req, res) => {
  const todo = req.body;
  todos.push({ ...todo, id: userId });
  res.send("added successfully");
};
module.exports = createTodo;
