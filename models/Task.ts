import mongoose from "mongoose";

export interface Task extends mongoose.Document {
  task: string;
  isCompleted: boolean;
}

const TaskSchema = new mongoose.Schema<Task>({
  task: {
    type: String,
    required: [true, "Please provide a name for this pet."],
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.models.Task || mongoose.model<Task>("Task", TaskSchema);