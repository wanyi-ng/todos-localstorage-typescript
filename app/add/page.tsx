'use client'
import React, { useState } from 'react'
import { uuid } from 'uuidv4'
import { ITodo } from '@/lib/ITodo'
import AddTaskForm from '@/components/AddTaskForm'
import Tasks from '@/components/Tasks'

export default function AddTask() {
  const [todo, setTodo] = useState<string>('')
  const [todos, setTodos] = useState<ITodo[]>([])

  const handleAddTask = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setTodos([...todos, { id: uuid(), task: todo, isCompleted: false}])
    setTodo('')
  }

  console.log("ALL_TASKS: ", todos)

  return (
    <main className="flex flex-col min-h-screen h-full p-24">
      <div className="max-w-screen-lg w-full mx-auto">
        <AddTaskForm todo={todo} setTodo={setTodo} handleAddTask={handleAddTask} />
      </div>

      <Tasks todos={todos} setTodos={setTodos} />
    </main>
  )
}