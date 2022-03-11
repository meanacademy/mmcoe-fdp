let mongoose = require("mongoose");

//connect to db
let createDBConnection = () => {
  mongoose
    .connect("mongodb://localhost:27017/mmcoefdp", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connection to db Success..!");
    })
    .catch((err) => {
      console.log("Connection to db Unsuccessful", erer);
    });
};

//check db
let checkDb = () => {
    let db = mongoose.connection;
    db.on("error", (error) => {
      console.log(error);
    });

    db.on("open", () => {
      console.log("Connected to db - mmcoefdp");
    });
}

//create schema
let studentSchema = mongoose.Schema({
  rollno: { type: Number, require: true },
  name: { type: String, require: true },
  contactno: { type: Number },
  createdAt: { type: Date, default: Date.now },
});

//create model
const Student = mongoose.model("students", studentSchema);

//insert single document or student to collection students
let insertSingleDocument = () => {
  //crete a document
  let student = new Student({
    rollno: 123,
    name: "Mahesh Bodhgire",
    contactno: 9876654337,
  });

  student.save((err, student) => {
    if (err) throw err;
    console.log("Student Added");
  });
};

//insert multiple documents to a collection students
let insertMultipleDocs = () => {
  //crete multiple documents
  let docs = [
    { rollno: 456, name: "ABC", contactno: 5478698798 },
    { rollno: 789, name: "xyz", contactno: 8778786766 },
    { rollno: 111, name: "pqr", contactno: 9978556565 },
    ];
    
    Student.collection.insertMany(docs, (err, students) => {
        if (err) throw err;
        console.log('Students addeded');
    });
};

//find all the students
let getAllStudents = () => {
    Student.find({}, (err, students) => {
        if (err || !students) throw err;
        console.log(students);
    })
}

//get a single student
let getStudent = (rollno) => {
    Student.findOne({ rollno: rollno }, (err, students) => {
        if (err || !student) throw err;
        console.log(student);
    })
}

//update a student
let updateStudent = (rollno) => {
    Student.findOneAndUpdate({ rollno: rollno }, { "contactno": 7507406161 }, (err) => {
        if (err) throw err;
        console.log('Student updated');
    })
}

//delete student
let deleteStudent = (rollno) => {
    Student.deleteOne({ rollno: rollno }, (err) => {
        if (err) throw err;
        console.log('Student Deleted');
    })
}

//delete all students
let deleteStudents = () => {
    Student.deleteMany({}, (err) => {
        if (err) throw err;
        console.log('Students deleted');
    })
}


createDBConnection();
checkDb();
// insertSingleDocument();
// insertMultipleDocs();
// updateStudent(123);
// deleteStudent(123);
deleteStudents();