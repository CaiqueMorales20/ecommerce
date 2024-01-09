'use client'

import Input from '@/app/(components)/Input'
import { useState } from 'react'

// Functional Component
export default function Billing() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  // Rendering
  return (
    <div>
      <h2 className="col-span-2 mb-[16px] text-subtitle uppercase text-primary">
        Billing Details
      </h2>
      <div className="grid gap-x-[24px] gap-y-[16px] md:grid-cols-2">
        <Input
          name="Name"
          value={name}
          placeholder="Caique Morales Silva"
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setName(e.currentTarget.value)
          }
        />
        <Input
          name="Email"
          value={email}
          placeholder="caiquemorales20@gmail.com"
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setEmail(e.currentTarget.value)
          }
        />
        <Input
          name="Phone Number"
          value={phone}
          placeholder="(11) 96193-0889"
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setPhone(e.currentTarget.value)
          }
        />
      </div>
    </div>
  )
}
