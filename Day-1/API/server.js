let express = require("express");
let mongoose = require("mongoose");
const PORT = 3000;
let todoRoutes = require("./routes/todoRoutes");
let app = express();
let bodyParser = require("body-parser");

mongoose
  .connect("mongodb://localhost:27017/mmcoetodo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => console.error(err));

app.use(bodyParser.json());
app.use("/api", todoRoutes); //https://localhost:3000/api/todo

app.listen(PORT, () => {
  console.log("Server Started");
});