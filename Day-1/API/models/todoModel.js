let mongoose = require("mongoose");

//create todo schema
let todoSchema = mongoose.Schema({
  title: { type: String, require: true, maxlength: 20 },
  description: { type: String, require: true, maxlength: 100 },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("todos", todoSchema);