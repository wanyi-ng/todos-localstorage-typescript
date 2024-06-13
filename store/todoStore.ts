import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { v4 as uuidv4 } from 'uuid'
import { Todo } from '@/lib/models/Todo'

export const useStore = create(
  persist(
    (set, get) => ({
      todos: [],

      addTodo: (description: string) => {
        set((state: any) => ({
          // add new task to beginning of array
          todos: [{ id: uuidv4(), description, completed: false }, ...state.todos ]
        }))
      },
      deleteTodo: (id: string) => {
        set((state: any) => ({
          todos: state.todos.filter((todo: Todo) => todo.id !== id)
        }))
      },
      markAsCompleted: (id: string) => {
        set((state: any) => {
          // find the todo to update, if not found return
          const todoToUpdate = state.todos.find((todo: Todo) => todo.id === id)
          if (!todoToUpdate) return state

          // change specific todo's property
          const updatedTodo = { ...todoToUpdate, completed: !todoToUpdate.completed }
          const filteredTodos = state.todos.filter((todo: Todo) => todo.id !== id)

          // add the changed todo to the end of the array
          return {
            todos: [...filteredTodos, updatedTodo],
          }
        })
      },
      deleteAllTodos: () => {
        set(() => ({
          todos: [],
        }))
      },
    }),
    {
      name: "todos",
      storage: createJSONStorage(() => localStorage),
    }
  )
)