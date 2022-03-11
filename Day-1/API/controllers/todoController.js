let Todo = require("../models/todoModel");

exports.addTodo = (req, res) => {
  console.log(req.body);

  let todo = new Todo(req.body);
  todo.save((err, result) => {
    if (err || !result) {
      res.json({
        success: false,
        msg: err,
      });
    } else {
      res.json({
        success: true,
        data: result,
      });
    }
  });
};

exports.findTodos = (req, res) => {
  Todo.find({}, (err, result) => {
    if (err || !result) {
      res.json({
        success: false,
        msg: err,
      });
    } else {
      res.json({
        success: true,
        data: result,
      });
    }
  });
};

exports.getSingleTodo = (req, res) => {
  console.log(req.params);

  Todo.findById(req.params.todoid, (err, todo) => {
    if (err || !todo) {
      res.json({
        success: false,
        msg: err,
      });
    } else {
      res.json({
        success: true,
        data: todo,
      });
    }
  });
};

exports.updateTodo = (req, res) => {
    console.log(req.body);
    console.log(req.params.todoid);
  Todo.findByIdAndUpdate(req.params.todoid, req.body, (err) => {
    if (err) {
      res.json({ success: false, msg: err });
    } else {
      res.json({ success: true, msg: "Updated" });
    }
  });
};

exports.deleteTodo = (req, res) => {
  Todo.findByIdAndDelete(req.params.todoid, (err) => {
    if (err) {
      res.json({ success: false, msg: err });
    } else {
      res.json({ success: true, msg: "Deleted" });
    }
  });
};
