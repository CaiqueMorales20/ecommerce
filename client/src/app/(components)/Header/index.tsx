import { getCategories } from '@/utils/server/getCategories'
import Nav from './Nav'

// Functional Component
export default async function Header() {
  const categories = await getCategories()

  // Rendering
  return (
    <header className="flex h-[96px] items-center bg-dark">
      <Nav categories={categories} />
    </header>
  )
}
