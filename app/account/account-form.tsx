'use client'
import { useCallback, useEffect, useState } from "react"
// import { createClient } from "@/utils/supabase/client"
import { type User } from "@supabase/supabase-js"

export default function AccountForm({ user }: { user: User | null }) {
  // const supabase = createClient()

  const [loading, setLoading] = useState(true)

  const getProfile = useCallback(async () => {
    try {
      setLoading(true)

      // const { data, error, status } = await supabase
      //   .from('users')
      //   .select(`email`)
      //   .eq('id', user?.id)
      //   .single()

      // if (error && status !== 406) {
      //   console.log(error)
      //   throw error
      // }

      if (user) {
        console.log(user)
      }
    } catch (error) {
      alert('Error loading user data!')
    } finally {
      setLoading(false)
    }
  }, [user])
  // }, [user, supabase])

  useEffect(() => {
    getProfile()
  }, [user, getProfile])

  console.log(user)


  return (
    <main className="bg-zinc-50 dark:bg-zinc-950 flex min-h-screen h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="bg-white dark:bg-zinc-900 px-6 py-12 shadow sm:rounded-lg sm:px-12 sm:mx-auto sm:w-full sm:max-w-[480px]">
        <h2 className="text-xl font-bold tracking-tight text-gray-900 dark:text-zinc-50">
          Profile
        </h2>

        <div className="mt-10 space-y-6">
          <div className="flex justify-between gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900 dark:text-zinc-50">
                First name
              </label>
              <div className="mt-2">
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={user?.user_metadata?.first_name}
                  disabled
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900 dark:text-zinc-50">
                Last name
              </label>
              <div className="mt-2">
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={user?.user_metadata?.last_name}
                  disabled
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 dark:text-zinc-50">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                value={user?.email}
                disabled
                className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 space-y-4">
          <button className="w-full rounded-md bg-zinc-950 hover:bg-zinc-800 dark:bg-zinc-500 dark:hover:bg-zinc-400/60 px-3 py-1.5 text-sm font-semibold leading-6 text-white text-center shadow-sm">
            Update
          </button>
          <div>
            <form action="/auth/signout" method="post">
              <button
                type="submit"
                className="w-full rounded-md bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-500 dark:hover:bg-zinc-400/60 px-3 py-1.5 text-sm font-semibold leading-6 text-zinc-800 text-center shadow-sm"
                >
                Sign out
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}