'use client'

import Button from '@/app/(components)/Button'
import Item from './Item'
import { useProductContext } from '@/context'

// Functional Component
export default function Summary({ onFinish }: { onFinish: () => void }) {
  // Variables
  const { cart } = useProductContext()
  const totalValue = cart
    ?.map((item) => item.price)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
  const formattedTotal = totalValue?.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  // Rendering
  return (
    <div>
      <h3 className="mb-[31px] text-h6 uppercase">Summary</h3>
      <div className="mb-[32px] flex flex-col gap-[24px]">
        {cart.map((product, index) => (
          <Item key={`summary item ${index}`} {...product} />
        ))}
      </div>
      {/*
      <div className="mb-[24px] flex flex-col gap-[8px]">
        <div className="flex justify-between">
          <h6 className="text-body uppercase opacity-50">Total</h6>
          <span className="text-h6">$ 5,396</span>
        </div>
        <div className="flex justify-between">
          <h6 className="text-body uppercase opacity-50">Shipping</h6>
          <span className="text-h6">$ 50</span>
        </div>
        <div className="flex justify-between">
          <h6 className="text-body uppercase opacity-50">Vat (included)</h6>
          <span className="text-h6">$ 1,079</span>
        </div>
      </div>
      */}
      {/* Grand Total */}
      <div className="mb-[32px] flex justify-between">
        <h6 className="text-body uppercase opacity-50">Grand Total</h6>
        <span className="text-h6 text-primary">{formattedTotal}</span>
      </div>
      {/* Finish */}
      <Button
        onClick={onFinish}
        className="w-full"
        text="Continue & Pay"
        type="primary"
      />
    </div>
  )
}
