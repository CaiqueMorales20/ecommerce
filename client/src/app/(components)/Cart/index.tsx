'use client'

import { useOnClickOutside } from '@/hooks/useOnClickOutside'
import { useEffect, useRef, useState } from 'react'
import Item from './Item'
import Button from '../Button'
import { useRouter } from 'next/navigation'
import { useProductContext } from '@/context'

type ICart = {
  openedMenu: boolean
  onRequestClose: () => void
}

// Functional Component
export default function Cart({ openedMenu, onRequestClose }: ICart) {
  // Variables
  const { cart, clearCart } = useProductContext()
  const [isMenuOpened, setIsMenuOpened] = useState(openedMenu)
  const totalValue = cart
    ?.map((item) => item.price)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
  const formattedTotal = totalValue?.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  const menuRef = useRef(null)
  const router = useRouter()

  useOnClickOutside(menuRef, () => onRequestClose(), 'mousedown', isMenuOpened)

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
              <span className="text-h6">{formattedTotal}</span>
            </div>
            {/* Finish */}
            <Button
              onClick={() => {
                router.push('/checkout')
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
