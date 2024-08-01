'use client'

import React, { useEffect, useState } from 'react'
import { Reorder } from 'framer-motion'
import { useStore } from '@/store/todoStore'
import { Todo } from '@/lib/models/Todo'
import { ChevronUpDownIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'

interface TodoState {
  todos: Todo[];
  addTodo: (description: string) => void;
  deleteTodo: (id: string) => void;
  markAsCompleted: (id: string) => void;
  deleteAllTodos: () => void;
}

export default function TodoForm() {
  const [todo, setTodo] = useState('')
  const { addTodo, deleteTodo, markAsCompleted, deleteAllTodos, todos } = useStore() as TodoState
  const [rearrangeTodos, setRearrangeTodos] = useState<Todo[]>([])

  useEffect(() => {
    setRearrangeTodos(todos)
  }, [todos])

  const handleAddTodo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await addTodo(todo)
    setTodo('')
  }

  return (
    <>
      <div className="w-full max-w-screen-lg mx-auto">
        <form className="flex items-center justify-center gap-3" onSubmit={handleAddTodo}>
          <label htmlFor="todo">Enter a task: </label>
          <input
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            name="todo"
            className="px-[12px] py-[6px] rounded-[4px] flex-1 bg-transparent border border-zinc-800 focus:border-zinc-100 focus:shadow-md"
            required
          />
          <button type="submit" className="px-[12px] py-[10px] rounded-[4px] md:px-[20px] lg:px-[24px] text-sm text-zinc-50 bg-zinc-950 hover:shadow-sm hover:shadow-zinc-100/30 hover:bg-zinc-800">Add</button>
        </form>
      </div>

      <section className="flex flex-col w-full max-w-screen-xl py-24 mx-auto space-y-8">
        {todos.length > 0 && (
          <button type="submit" className="self-end px-[12px] py-[10px] rounded-[4px] md:px-[20px] lg:px-[24px] text-sm border border-red-600 text-red-600 hover:shadow-sm hover:shadow-zinc-100/30 hover:bg-red-500 hover:text-zinc-50" onClick={() => deleteAllTodos()}>Delete all</button>
        )}

        <ul className='space-y-2'>
          <Reorder.Group axis='y' values={rearrangeTodos} onReorder={setRearrangeTodos}>
            {rearrangeTodos && rearrangeTodos.map((item: Todo) => (
              <Reorder.Item key={item.id} value={item} className={`${item.completed === true ? 'line-through' : '' } flex justify-between items-center gap-4 hover:bg-zinc-300/30 rounded-[4px] pl-4 pr-2 py-2 hover:cursor-grab`}>
                <div className='flex items-center gap-4'>
                  <ChevronUpDownIcon className='size-4' />
                  <input type='checkbox' defaultChecked={item.completed} onClick={() => markAsCompleted(item.id)} />
                  <p>{item.description}</p>
                </div>
                <div className='flex items-center gap-6'>
                  <button
                    type='button'
                    className='p-2 hover:scale-125 rounded-[4px] hover:text-red-500'
                    onClick={() => deleteTodo(item.id)}
                  >
                    <TrashIcon className='size-4' />
                  </button>
                  <button type='button' className='p-2 hover:scale-125'>
                    <PencilSquareIcon className='size-4' />
                  </button>
                </div>
              </Reorder.Item>
            ))}
          </Reorder.Group>
        </ul>
      </section>
    </>
  )
}
