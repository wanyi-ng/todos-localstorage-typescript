// import { useMemo } from 'react'
import { createBrowserClient } from '@supabase/ssr'

export const createClient = () => {
  // Create a supabase client on the browser
  createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  )
}

// export function useSupabaseClient() {
//   return useMemo(createClient, [])
// }