'use client'

import CategoryItem from '../CategoryItem'

// Functional Component
export default function CategoryList({ categories }: { categories: string[] }) {
  // Rendering
  return categories.map((category: string, index: number) => (
    <CategoryItem key={index} name={category} />
  ))
}
