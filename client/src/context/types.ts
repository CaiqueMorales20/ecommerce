import { Product } from '@/types/product'

type ProductWithQuantity = {
  quantity: number
} & Product

type IProductContext = {
  cart: ProductWithQuantity[]
  addToCard: ({ product }: { product: ProductWithQuantity }) => void
  deleteItem: (idToDelete: number) => void
  reduceItem: (idToReduce: number) => void
  increaseItem: (idToIncrease: number) => void
  clearCart: () => void
}

export type { IProductContext, ProductWithQuantity }
