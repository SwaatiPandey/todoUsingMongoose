const mongoose = require("mongoose");
const dotenv = require("dotenv");
// const uniqid = require("uniqid");
const Task = require("./models/taskSchema");
dotenv.config({ path: "./config.env" });
mongoose.connect(
  process.env.DATABASE_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, connection) => {
    if (err) {
      console.log(err);
      return console.log("Error in connecting to database");
    }
    let newTask = new Task({ taskName: "added new task" });
    newTask
      .save()
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
    Task.find({})
      .then((allTasks) => {
        console.log("All tasks");
        console.log(allTasks);
      })
      .catch((err) => {
        console.log(err);
      });
    //update
    // Task.updateOne({ status: "completed" }, { status: "in progress" });
    //     Task.findOneAndUpdate(
    //       { status: "in progress" },
    //       { status: "completed" },
    //       { useFindAndModify: false, new: true }
    //     )
    //       .then((data) => {
    //         console.log(data);
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       });
  }
);
