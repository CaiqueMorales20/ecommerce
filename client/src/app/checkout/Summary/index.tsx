'use client'

import Button from '@/app/(components)/Button'
import Item from './Item'
import { useProductContext } from '@/context'
import { useEffect, useState } from 'react'
import formatValue from '@/utils/formatValue'

// Functional Component
export default function Summary({ onFinish }: { onFinish: () => void }) {
  // Variables
  const { cart } = useProductContext()
  const [totalValue, setTotalValue] = useState(0)

  useEffect(() => {
    const pricesArray = cart.map((item) => {
      console.log(item.price)
      const cleanedStr = item.price.replace(/[$,]/g, '')
      const price = Number(cleanedStr) * item.quantity
      return price
    })

    const currentTotal = pricesArray.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0,
    )

    setTotalValue(currentTotal)
  }, [cart])

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
        <span className="text-h6 text-primary">{formatValue(totalValue)}</span>
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
