import TodoForm from "@/components/TodoForm"

export default async function TodoPage() {
  return (
    <main className="flex flex-col h-full min-h-screen p-24">
      <TodoForm />
    </main>
  )
}