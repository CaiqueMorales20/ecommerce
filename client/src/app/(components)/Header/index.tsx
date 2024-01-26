import Nav from './Nav'
import { stripe } from '@/utils/stripe'

// Functional Component
export default async function Header() {
  const products = await stripe.products.list()
  const categories: string[] = []

  products.data.forEach((product) => {
    if (!categories.includes(product.metadata.category)) {
      categories.push(product.metadata.category)
    }
  })

  // Rendering
  return (
    <header className="flex h-[96px] items-center bg-dark">
      <Nav categories={categories} />
    </header>
  )
}
