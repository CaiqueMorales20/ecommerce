'use client'

import { useQuery } from '@tanstack/react-query'
import CategoryItem from '../CategoryItem'
import { getCategoriesClient } from '@/utils/getCategoriesClient'

// Functional Component
export default function CategoryList(categories: any[]) {
  const { data, error, isFetched } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategoriesClient,
    initialData: categories,
  })

  if (!isFetched) return <h1>Loading...</h1>
  if (error) return <h1>Error when loading</h1>
  if (!data) return <h1>No data found</h1>

  // Rendering
  return data.map(
    (
      categorie: { name: string; slug: string; icon: string },
      index: number,
    ) => (
      <CategoryItem
        key={index}
        name={categorie.name}
        slug={categorie.slug}
        icon={categorie.icon}
      />
    ),
  )
}
