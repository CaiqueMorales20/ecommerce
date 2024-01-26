import Stripe from 'stripe'
import stripeConfig from '../../config/stripe'

const stripe = new Stripe(stripeConfig.secretKey)

export { stripe }
