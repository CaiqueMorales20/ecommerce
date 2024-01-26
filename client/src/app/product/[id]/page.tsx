import GoBackBtn from '@/app/(components)/GoBackBtn'
import Description from './Description'
import Likeable from './Likeable'
import Photos from './Photos'
import Pitch from '@/app/(components)/Pitch'
import { stripe } from '@/utils/stripe'
import Overview from './Overview'

// Functional Component
export default async function Product({ params }: { params: { id: string } }) {
  const product = await stripe.products.retrieve(params.id)

  const price = await stripe.prices.retrieve(String(product.default_price))
  if (!price.unit_amount) return

  const centsToValue = price.unit_amount / 100
  const formattedAmount = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'USD',
  }).format(centsToValue)

  // Rendering
  return (
    <main className="container pt-[16px] md:pt-[79px]">
      <GoBackBtn />
      <Overview {...product} price={formattedAmount} />
      <Description />
      <Photos />
      <Likeable />
      <Pitch />
    </main>
  )
}
