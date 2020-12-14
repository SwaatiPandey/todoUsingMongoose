//mongoose schema
const uniqid = require("uniqid");
const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema({
  taskId: {
    type: String,
    default: uniqid(),
  },
  taskName: {
    type: String,
    required: [true, "Please enter task details"],
    validate: {
      validator: function (taskName) {
        console.log("this is task validator", this);
        return this.taskName.trim().length;
        return true;
      },
      message: "task name shouldnot be empty",
    },
  },
  status: {
    type: String,
    default: "Pending",
  },
});
const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
