interface Product {
  productId: number
  categoryId: number
  name: string
  description: string
  image: string
  price: number
  slug: string
  stockQuantity: number
  createdAt: Date
  updatedAt: Date
}

export type { Product }
