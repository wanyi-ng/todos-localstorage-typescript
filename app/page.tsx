import Link from "next/link";
import { PencilSquareIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <main className="bg-zinc-50 dark:bg-zinc-950 flex min-h-screen h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="bg-white dark:bg-zinc-900 px-6 py-12 shadow sm:rounded-lg sm:px-12 sm:mx-auto sm:w-full sm:max-w-[480px] space-y-8">
        <h2 className="flex items-center gap-1 text-xl font-bold tracking-tight text-gray-900 dark:text-zinc-50">
          <PencilSquareIcon className="size-6" /> Todo App
        </h2>
        <div className="flex justify-between gap-4">
          <Link href='/login' className="w-full rounded-md bg-zinc-950 hover:bg-zinc-800 dark:bg-zinc-500 dark:hover:bg-zinc-400/60 px-3 py-1.5 text-sm font-semibold leading-6 text-white text-center shadow-sm">Login</Link>
          <Link href='/signup' className="w-full rounded-md bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-500 dark:hover:bg-zinc-400/60 px-3 py-1.5 text-sm font-semibold leading-6 text-zinc-800 text-center shadow-sm">Sign up</Link>
        </div>
      </div>
    </main>
  )
}