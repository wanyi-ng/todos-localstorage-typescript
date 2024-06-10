import React from 'react'
import { ITodo } from '@/lib/ITodo'

interface Props {
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

export default function Tasks({ todos, setTodos }: Props) {
  return (
    <section className="max-w-screen-xl w-full mx-auto py-24">
      <ul className='space-y-2'>
        {todos.map((todo) => (
          <li key={todo.id} className='flex items-center gap-4'>
            <input type='checkbox' />
            <p>{todo.task}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
