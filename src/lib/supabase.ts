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

// Send order notification and contract emails via Edge Function
async function sendOrderEmails(order: Order): Promise<void> {
  try {
    const response = await fetch(
      `${supabaseUrl}/functions/v1/send-order-emails`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${supabaseAnonKey}`,
        },
        body: JSON.stringify(order),
      }
    )
    
    if (!response.ok) {
      console.error('Failed to send order emails:', await response.text())
    } else {
      const result = await response.json()
      console.log('Order emails sent:', result)
    }
  } catch (error) {
    console.error('Error sending order emails:', error)
    // Don't throw - email failure shouldn't block order submission
  }
}

export async function submitOrder(order: Omit<Order, 'id' | 'created_at' | 'status'>) {
  const { data, error } = await supabase
    .from('orders')
    .insert([order])
    .select()
    .single()

  if (error) throw error
  
  // Send notification and contract emails after successful order
  if (data) {
    await sendOrderEmails(data as Order)
  }
  
  return data
}
