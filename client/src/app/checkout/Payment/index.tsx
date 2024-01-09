'use client'

import Input from '@/app/(components)/Input'
import Radio from '@/app/(components)/Radio'
import { useState } from 'react'

const paymentsMethods = [
  { id: 1, name: 'e-Money' },
  { id: 2, name: 'Cash on Delievery' },
]

// Functional Component
export default function Payment() {
  const [selected, setSelected] = useState<string>('')
  const [eMoneyNumber, setEMoneyNumber] = useState<string>('')
  const [eMoneyPIN, setEMoneyPIN] = useState<string>('')

  // Rendering
  return (
    <div>
      <h2 className="col-span-2 mb-[16px] text-subtitle uppercase text-primary">
        Shipping Info
      </h2>
      <div className="grid gap-x-[24px] gap-y-[16px] md:grid-cols-2">
        <h4 className="text-subtitle md:col-span-2">Payment Method</h4>
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
        {selected === 'e-Money' && (
          <>
            <Input
              name="e-Money Number"
              value={eMoneyNumber}
              placeholder="238521993"
              onChange={(e: React.FormEvent<HTMLInputElement>) =>
                setEMoneyNumber(e.currentTarget.value)
              }
            />
            <Input
              name="e-Money PIN"
              value={eMoneyPIN}
              placeholder="6891"
              onChange={(e: React.FormEvent<HTMLInputElement>) =>
                setEMoneyPIN(e.currentTarget.value)
              }
            />
          </>
        )}
      </div>
    </div>
  )
}
