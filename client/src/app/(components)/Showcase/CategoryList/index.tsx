'use client'

import { useQuery } from '@tanstack/react-query'
import CategoryItem from '../CategoryItem'
import { getCategoriesClient } from '@/utils/client/getCategoriesClient'

// Functional Component
export default function CategoryList({ categories }: { categories: string[] }) {
  const { data } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategoriesClient,
    initialData: categories,
  })

  // Rendering
  return data.map((category: string, index: number) => (
    <CategoryItem key={index} name={category} />
  ))
}
