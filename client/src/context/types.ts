import { Product } from '@/types/product'

type ProductWithQuantity = {
  quantity: number
} & Product

type ICart = ProductWithQuantity[]

type IProductContext = {
  cart: ICart
  addToCard: ({ product }: { product: ProductWithQuantity }) => void
  clearCart: () => void
}

export type { IProductContext, ICart, ProductWithQuantity }
