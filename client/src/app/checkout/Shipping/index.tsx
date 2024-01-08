'use client'

import Input from '@/app/(components)/Input'
import { useState } from 'react'

// Functional Component
export default function Shipping() {
  const [name, setName] = useState('')

  // Rendering
  return (
    <div>
      <h2 className="col-span-2 mb-[16px] text-subtitle uppercase text-primary">
        Shipping Info
      </h2>
      <div className="grid grid-cols-2 gap-x-[24px] gap-y-[16px]">
        <Input
          className="col-span-2"
          name="Your address"
          value={name}
          placeholder="Rua Visconde de Inhaúma"
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setName(e.currentTarget.value)
          }
        />
        <Input
          name="ZIP Code"
          value={name}
          placeholder="09011-110"
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setName(e.currentTarget.value)
          }
        />
        <Input
          name="City"
          value={name}
          placeholder="São Caetano"
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setName(e.currentTarget.value)
          }
        />
        <Input
          name="Country"
          value={name}
          placeholder="Brazil"
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setName(e.currentTarget.value)
          }
        />
      </div>
    </div>
  )
}
