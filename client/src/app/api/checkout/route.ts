import { ProductWithQuantity } from '@/context/types'
import { stripe } from '@/utils/stripe'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const data = await req.json()
  const baseURL = req.headers.get('origin')

  const products = data.map((product: ProductWithQuantity) => ({
    price: product.default_price,
    quantity: product.quantity,
  }))

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    payment_method_types: ['card'],
    line_items: products,
    success_url: `${baseURL}/sucess/`,
    cancel_url: `${baseURL}/`,
    allow_promotion_codes: true,
  })

  return NextResponse.json(session, { status: 200 })
}
