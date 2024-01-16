'use server'

import { Product } from '@/types/product'

export async function getProducts() {
  const response = await fetch(`http:localhost:3333/products/`, {
    method: 'GET',
    cache: 'no-cache',
  })

  if (!response.ok) {
    throw new Error('Network response was not ok')
  }

  const data: Product[] = await response.json()

  return data
}
