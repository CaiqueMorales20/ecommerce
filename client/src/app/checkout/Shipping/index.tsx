'use client'

import Input from '@/app/(components)/Input'
import { useState } from 'react'

// Functional Component
export default function Shipping() {
  const [address, setAddress] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')

  // Rendering
  return (
    <div>
      <h2 className="col-span-2 mb-[16px] text-subtitle uppercase text-primary">
        Shipping Info
      </h2>
      <div className="grid gap-x-[24px] gap-y-[16px] md:grid-cols-2">
        <Input
          className="md:col-span-2"
          name="Your address"
          value={address}
          placeholder="Rua Visconde de Inhaúma"
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setAddress(e.currentTarget.value)
          }
        />
        <Input
          name="ZIP Code"
          value={zipCode}
          placeholder="09011-110"
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setZipCode(e.currentTarget.value)
          }
        />
        <Input
          name="City"
          value={city}
          placeholder="São Caetano"
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setCity(e.currentTarget.value)
          }
        />
        <Input
          name="Country"
          value={country}
          placeholder="Brazil"
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setCountry(e.currentTarget.value)
          }
        />
      </div>
    </div>
  )
}
