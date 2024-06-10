import React from "react"

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAddTask: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

export default function AddTaskForm({ todo, setTodo, handleAddTask }: Props) {
  return (
    <form className="flex justify-center items-center gap-2" onSubmit={handleAddTask}>
      <label htmlFor="task">Enter a task: </label>
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        name="task"
        type="input"
        placeholder="Add a todo..."
        className="px-[12px] py-[7px] rounded-[4px] shadow-sm flex-1"
      />
      <button
        type="submit"
        className="px-[12px] py-[8px] rounded-[4px] md:px-[20px] lg:px-[24px] text-sm bg-zinc-950 text-zinc-50 shadow-md"
      >
        Add
      </button>
    </form>
  )
}
