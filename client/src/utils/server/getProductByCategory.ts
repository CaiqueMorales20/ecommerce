'use server'

import { Product } from '@/types/product'

export async function getProductByCategory({ category }: { category: string }) {
  const response = await fetch(
    `http:localhost:3333/products/category/${category}`,
    {
      method: 'GET',
    },
  )

  if (!response.ok) {
    throw new Error('Network response was not ok')
  }

  const data: Product[] = await response.json()

  return data
}
