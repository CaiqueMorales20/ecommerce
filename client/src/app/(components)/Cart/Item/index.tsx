'use client'

import { useProductContext } from '@/context'
import { ProductWithQuantity } from '@/context/types'
import Image from 'next/image'

// Functional Component
export default function Item(product: ProductWithQuantity) {
  const { reduceItem, increaseItem } = useProductContext()

  const cleanedStr = product.price.replace(/[$,]/g, '')
  const numericAmount = parseFloat(cleanedStr)
  const price = Number(numericAmount) * product.quantity
  const formattedPrice = price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  // Rendering
  return (
    <div className="flex items-center gap-[16px]">
      <div className="h-[64px] w-[64px] rounded-[8px] bg-[#f1f1f1] px-[8px] py-[8px]">
        <Image
          className="mx-auto h-full object-contain"
          src={product.images[0]}
          alt="dasdas"
          width={349}
          height={386}
        />
      </div>
      <div className="flex-1">
        <div className="flex w-full justify-between gap-10">
          <h5 className="text-body font-bold">{product.name}</h5>
          <div className="flex items-center gap-1">
            <span
              className="cursor-pointer"
              onClick={() => reduceItem(product.id)}
            >
              {' '}
              -{' '}
            </span>
            <span className="text-body opacity-50">{product.quantity}</span>
            <span
              className="cursor-pointer"
              onClick={() => increaseItem(product.id)}
            >
              {' '}
              +{' '}
            </span>
          </div>
        </div>
        <h6 className="text-subtitle opacity-50">{formattedPrice}</h6>
      </div>
    </div>
  )
}
