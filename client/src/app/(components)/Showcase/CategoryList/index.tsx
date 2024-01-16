'use client'

import { useQuery } from '@tanstack/react-query'
import CategoryItem from '../CategoryItem'
import { getCategoriesClient } from '@/utils/client/getCategoriesClient'
import { Category } from '@/types/category'

// Functional Component
export default function CategoryList({
  categories,
}: {
  categories: Category[]
}) {
  const { data } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategoriesClient,
    initialData: categories,
  })

  // Rendering
  return data.map((category: Category, index: number) => (
    <CategoryItem
      key={index}
      name={category.name}
      slug={category.slug}
      icon={category.icon}
    />
  ))
}
