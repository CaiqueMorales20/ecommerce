import Stripe from 'stripe'

let stripe = {}
if (process.env.Stripe_SK)
  stripe = new Stripe(process.env.Stripe_SK, { typescript: true })

export { stripe }
