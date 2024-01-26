'use client'

import Button from '@/app/(components)/Button'
import { useProductContext } from '@/context'
import Image from 'next/image'
import Stripe from 'stripe'

// Functional Component
export default function Overview(product: Stripe.Product & { price: string }) {
  // Variables

  const { addToCard } = useProductContext()

  // Functions
  function handleAddToCart() {
    addToCard({
      product: {
        ...product,
        quantity: 1,
      },
    })
  }

  // Rendering
  return (
    <div className="mb-[88px] grid items-center gap-[32px] md:mb-[140px] md:grid-cols-2 md:gap-[125px] md:text-left">
      <div className="grid w-full items-center justify-center bg-neutral-600 pb-[108px] pt-[65px]">
        <Image
          className="mx-auto h-auto w-full object-contain md:w-[100%]"
          alt="dasdas"
          src={product.images[0]}
          width={1000}
          height={1000}
        />
      </div>
      <div className="flex max-w-[445px] flex-col md:block md:items-center">
        <h2 className="mb-[24px] text-overline uppercase text-primary-300 opacity-50 md:mb-[16px]">
          New product
        </h2>
        <h1 className="mb-[24px] text-h4 uppercase text-black/50 md:mb-[32px] md:text-h2">
          {product.name}
        </h1>
        <p className="mb-[24px] text-body text-black/50 opacity-75 md:mb-[40px]">
          {product.description}
        </p>
        <p className="mb-[47px] text-h6">{product.price}</p>
        <div>
          <Button onClick={handleAddToCart} text="Add to cart" type="primary" />
        </div>
      </div>
    </div>
  )
}
