'use client'

import { useOnClickOutside } from '@/hooks/useOnClickOutside'
import { useEffect, useRef, useState } from 'react'
import Item from './Item'
import Button from '../Button'
import { useProductContext } from '@/context'
import formatValue from '@/utils/formatValue'
import { useRouter } from 'next/navigation'
import { loadStripe, Stripe } from '@stripe/stripe-js'

type ICart = {
  openedMenu: boolean
  onRequestClose: () => void
}

// Functional Component
export default function Cart({ openedMenu, onRequestClose }: ICart) {
  // Variables
  const { cart, clearCart } = useProductContext()
  const [isMenuOpened, setIsMenuOpened] = useState(openedMenu)
  const [totalValue, setTotalValue] = useState(0)
  const [stripe, setStripe] = useState<Stripe | null>()

  useEffect(() => {
    async function handleStripe() {
      if (!process.env.NEXT_PUBLIC_Stripe_PK) return
      const stripeClient = await loadStripe(process.env.NEXT_PUBLIC_Stripe_PK)
      console.log('Stripe client initialized:', stripeClient)
      setStripe(stripeClient)
    }
    handleStripe()
  }, [])

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

  const menuRef = useRef(null)
  const router = useRouter()

  useOnClickOutside(menuRef, () => onRequestClose(), 'mousedown', isMenuOpened)

  async function checkout() {
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cart),
    })

    if (res.ok) {
      const data = await res.json()
      console.log('olha os dados aqui olha olha', data.id)
      router.push(`https://checkout.stripe.com/c/pay/${data.id}`)
      if (!stripe) return
      stripe.redirectToCheckout({
        sessionId: data.id,
      })
    } else {
      console.log('Failed to checkout', res.statusText)
    }
  }

  function handleClearCart() {
    onRequestClose()
    setTimeout(() => clearCart(), 200)
  }

  useEffect(() => {
    setIsMenuOpened(openedMenu)
  }, [openedMenu])

  // Rendering
  return (
    <div
      className={`absolute top-[126px] w-[90%] max-w-[1440px] duration-300 ${
        isMenuOpened ? ' z-30 opacity-100' : '-z-10 opacity-0'
      }`}
    >
      <div
        ref={menuRef}
        className="ml-auto mr-0 w-full max-w-[377px] rounded-[8px] bg-white px-[33px] py-[32px]"
      >
        <div className="mb-[31px] flex justify-between">
          <h6 className="text-h6 uppercase">Cart ({cart?.length})</h6>
          {cart.length > 0 && (
            <button onClick={handleClearCart} className="opacity-50">
              Remove all
            </button>
          )}
        </div>
        <div className="mb-[32px] flex flex-col gap-[24px]">
          {cart?.map((product, index) => (
            <Item key={`cart item ${index}`} {...product} />
          ))}
        </div>
        {cart.length === 0 && (
          <h6 className="text-body opacity-50">No items added yet</h6>
        )}
        {cart.length > 0 && (
          <>
            {/* Total */}
            <div className="mb-[24px] flex justify-between">
              <h6 className="text-body uppercase opacity-50">Total</h6>
              <span className="text-h6">{formatValue(totalValue)}</span>
            </div>
            {/* Finish */}
            <Button
              onClick={() => {
                checkout()
                onRequestClose()
              }}
              className="w-full"
              text="Checkout"
              type="primary"
            />
          </>
        )}
      </div>
    </div>
  )
}
