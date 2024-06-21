import Link from "next/link"

export default function ErrorPage() {
  return (
    <main className="bg-white dark:bg-zinc-950 min-h-screen flex h-full items-center">
      <div className="container mx-auto flex flex-col items-center">
        <p className="text-base font-semibold text-zinc-400 dark:text-zinc-500">
          404
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Page not found
        </h1>
        <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
          Sorry, we couldn't find the page you're looking for.
        </p>
        {/* <Link href="/" className="mt-4 bg-zinc-100 hover:bg-zinc-200"> */}
        <Link href="/" className="mt-4 rounded-md bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-500 dark:hover:bg-zinc-400/60 px-3 py-1.5 text-sm font-semibold leading-6 text-zinc-800 shadow-sm">
          Go back home
        </Link>
      </div>
    </main>
  )
}
