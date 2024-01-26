import Stripe from 'stripe'

type ProductWithQuantity = {
  price: string
  quantity: number
} & Stripe.Product

type IProductContext = {
  cart: ProductWithQuantity[]
  addToCard: ({ product }: { product: ProductWithQuantity }) => void
  deleteItem: (idToDelete: string) => void
  reduceItem: (idToReduce: string) => void
  increaseItem: (idToIncrease: string) => void
  clearCart: () => void
}

export type { IProductContext, ProductWithQuantity }
