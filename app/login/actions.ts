'use server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export async function login(formData: FormData) {
  const supabase = createClient()

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    redirect('/error')
  }
  revalidatePath('/', 'layout')
  redirect('/account')
}

export async function loginWithGoogle() {
  const supabase = createClient()

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${process.env.ORIGIN_URL}/auth/callback`,
      // queryParams: {
      //   access_type: 'offline',
      //   prompt: 'consent',
      // },
    }
  })

  if (error) {
    redirect('/error')
  }

  if (data.url) {
    redirect(data.url)
  }
}