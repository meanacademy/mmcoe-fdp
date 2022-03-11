let express = require('express');
let router = express.Router();

let {
  addTodo,
  findTodos,
  getSingleTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController");

//create routes 
router.post("/todo", addTodo);
router.get("/todos", findTodos);
router.get("/todo/:todoid", getSingleTodo);
router.put("/todo/:todoid", updateTodo);
router.delete("/todo/:todoid", deleteTodo);

module.exports = router;