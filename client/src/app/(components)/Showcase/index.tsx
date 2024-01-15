import { getCategories } from '@/utils/getCategories'
import CategoryList from './CategoryList'

// Functional Component
export default async function Showcase() {
  const categories = await getCategories()

  // Rendering
  return (
    <div className="mb-[120px] grid gap-[68px] md:mb-[168px] md:grid-cols-3 md:gap-[30px]">
      <CategoryList categories={categories} />
    </div>
  )
}
