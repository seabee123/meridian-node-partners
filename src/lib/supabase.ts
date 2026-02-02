import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://ebatqssgaivckdvdqvpm.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface Order {
  id?: string
  created_at?: string
  first_name: string
  last_name: string
  email: string
  phone: string
  company?: string
  product_id: string
  quantity: number
  country: string
  message?: string
  referral_source?: string
  accepted_terms: boolean
  accepted_disclaimer: boolean
  status?: string
}

export async function submitOrder(order: Omit<Order, 'id' | 'created_at' | 'status'>) {
  const { data, error } = await supabase
    .from('orders')
    .insert([order])
    .select()
    .single()

  if (error) throw error
  return data
}
