import Stripe from 'stripe'

const stripe = new Stripe(process.env.Stripe_SK as string, { typescript: true })

export { stripe }
