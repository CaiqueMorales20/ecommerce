import { stripe } from '@/utils/stripe'
import CategoryList from './CategoryList'

// Functional Component
export default async function Showcase() {
  const products = await stripe.products.list()
  const categories: string[] = []

  products.data.forEach((product) => {
    if (!categories.includes(product.metadata.category)) {
      categories.push(product.metadata.category)
    }
  })

  // Rendering
  return (
    <div className="mb-[120px] grid gap-[68px] md:mb-[168px] md:grid-cols-3 md:gap-[30px]">
      <CategoryList categories={categories} />
    </div>
  )
}
