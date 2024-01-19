'use server'

import { Category } from '@/types/category'

export async function getCategories() {
  const response = await fetch('http:localhost:3333/categories', {
    method: 'GET',
  })

  if (!response.ok) {
    throw new Error('Network response was not ok')
  }

  const data: Category[] = await response.json()
  return data
}
