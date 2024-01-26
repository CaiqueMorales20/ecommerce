import Stripe from 'stripe'
import stripeConfig from '../../../config/stripe'
import Image from 'next/image'

// Functional Component
export default async function Teste() {
  const stripe = new Stripe(stripeConfig.secretKey)

  const products = await stripe.products.list({
    expand: ['data.default_price'],
  })
  const productsChosen = await stripe.products.search({
    query: "active:'true' AND metadata['category']:'smartphones'",
  })

  if (products.data === undefined) return

  // Rendering
  return (
    <div className="container py-[80px]">
      <p>Pagina de teste</p>
      {products.data.map((product, index) => (
        <div key={index}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>{product.metadata.category}</p>
          <Image
            className="w-[10rem]"
            src={product.images[0]}
            alt={product.name}
            width={1000}
            height={1000}
          />
        </div>
      ))}
      <h3>Chosens product</h3>
      {productsChosen.data.map((product, index) => (
        <div key={index}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>{product.metadata.category}</p>
          <Image
            className="w-[10rem]"
            src={product.images[0]}
            alt={product.name}
            width={1000}
            height={1000}
          />
        </div>
      ))}
    </div>
  )
}
