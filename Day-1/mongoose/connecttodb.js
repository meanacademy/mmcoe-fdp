let mongoose = require("mongoose");

//create a mongodb connection with mongoose
mongoose.connect("mongodb://localhost:27017/mmcoefdp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//check mongodb connection
let db = mongoose.connection;

db.on("error", (error) => {
  console.log(error);
});

db.on("open", () => {
  console.log("Connected to db - mmcoefdp");
});

//define schema
let studentSchema = mongoose.Schema({
  rollno: Number,
  name: String,
  contactno: Number,
});

//create a model
const Student = mongoose.model("students", studentSchema);

//init student document (create a new student object)
let student = new Student({
  rollno: 123,
  name: "Mahesh Bodhgire",
  contactno: 9876654337,
});

//save or insert this document into collection
student.save((err, student) => {
  if (err) throw err;
  console.log("Student added.: ", student);
});
