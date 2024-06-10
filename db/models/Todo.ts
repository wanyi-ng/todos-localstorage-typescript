import mongoose from "mongoose";

export interface Todo extends mongoose.Document {
  task: string;
  isCompleted: boolean;
}

const TodoSchema = new mongoose.Schema<Todo>({
  task: {
    type: String,
    required: [true, "Please provide a name for this pet."],
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.models.Todo || mongoose.model<Todo>("Todo", TodoSchema);