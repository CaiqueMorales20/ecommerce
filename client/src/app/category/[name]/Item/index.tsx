'use client'

import Image from 'next/image'
import Button from '@/app/(components)/Button'
import { useRouter } from 'next/navigation'
import Stripe from 'stripe'

// Functional Component
export default function Item({
  name,
  description,
  images,
  id,
  reversed,
}: Stripe.Product & { reversed: boolean }) {
  const router = useRouter()

  async function handleSeeProduct() {
    router.push(`../product/${id}`)
  }

  // Rendering
  return (
    <div className="grid items-center gap-[32px] text-center md:grid-cols-2 md:gap-[125px] md:pt-[160px] md:text-left">
      <div
        className={`grid w-full items-center justify-center bg-neutral-600 pb-[108px] pt-[65px] ${
          reversed && 'md:col-start-2'
        }`}
      >
        <Image
          className="mx-auto h-auto w-full md:w-[80%]"
          src={images[0]}
          alt={name}
          width={1000}
          height={1000}
        />
      </div>
      <div
        className={`flex max-w-[445px] flex-col items-center md:block ${
          reversed && 'md:col-start-1 md:row-start-1'
        }`}
      >
        <h2 className="mb-[24px] text-overline uppercase text-primary-300 opacity-50 md:mb-[16px]">
          New product
        </h2>
        <h1 className="mb-[24px] text-h4 uppercase text-black/50 md:mb-[32px] md:text-h2">
          {name}
        </h1>
        <p className="mb-[24px] text-body text-black/50 opacity-75 md:mb-[40px]">
          {description}
        </p>
        <Button onClick={handleSeeProduct} text="See product" type="primary" />
      </div>
    </div>
  )
}
