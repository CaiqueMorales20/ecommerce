'use client'

import Radio from '@/app/(components)/Radio'
import { useState } from 'react'

const paymentsMethods = [
  { id: 1, name: 'e-Money' },
  { id: 2, name: 'Cash on Delievery' },
]

// Functional Component
export default function Payment() {
  const [selected, setSelected] = useState<string>('')

  // Rendering
  return (
    <div>
      <h2 className="col-span-2 mb-[16px] text-subtitle uppercase text-primary">
        Shipping Info
      </h2>
      <div className="grid grid-cols-2 gap-x-[24px] gap-y-[16px]">
        <h4 className="col-span-2 text-subtitle">Payment Method</h4>
        {paymentsMethods.map((item, index) => {
          return (
            <Radio
              key={index}
              selected={selected === item.name}
              name={item.name}
              onClick={() => setSelected(item.name)}
            />
          )
        })}
      </div>
    </div>
  )
}
