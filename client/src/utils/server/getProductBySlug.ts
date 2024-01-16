'use server'

import { Product } from '@/types/product'

export async function getProductBySlug({ slug }: { slug: string }) {
  const response = await fetch(`http:localhost:3333/products/slug/${slug}`, {
    method: 'GET',
    cache: 'no-cache',
  })

  if (!response.ok) {
    throw new Error('Network response was not ok')
  }

  const data: Product = await response.json()

  return data
}
