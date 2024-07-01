'use server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export async function signup(formData: FormData) {
  const supabase = createClient()

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
    options: {
      data: {
        first_name: formData.get('firstName') as string,
        last_name: formData.get('lastName') as string,
      }
    }
  }

  console.log("data: ", data)

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    console.log(error)

    redirect('/error')
  }
  revalidatePath('/', 'layout')
  redirect('/signup?message=Check email to continue sign in process')
}