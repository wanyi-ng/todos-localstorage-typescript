import mongoose from "mongoose";

export interface Todo extends mongoose.Document {
  id: string;
  task: string;
  completed: boolean;
}

const TodoSchema = new mongoose.Schema<Todo>({
  id: {
    type: String,
    required: true,
  },
  task: {
    type: String,
    required: [true, "Please provide a name for this pet."],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.models.Todo || mongoose.model<Todo>("Todo", TodoSchema);