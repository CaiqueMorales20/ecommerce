'use client'

import { useOnClickOutside } from '@/hooks/useOnClickOutside'
import { useEffect, useRef, useState } from 'react'
import Item from './Item'
import Button from '../Button'
import { useRouter } from 'next/navigation'

type ICart = {
  openedMenu: boolean
  onRequestClose: () => void
}

// Functional Component
export default function Cart({ openedMenu, onRequestClose }: ICart) {
  // Variables
  const [isMenuOpened, setIsMenuOpened] = useState(openedMenu)
  const menuRef = useRef(null)
  const router = useRouter()

  useOnClickOutside(menuRef, () => onRequestClose(), 'mousedown', isMenuOpened)

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
          <h6 className="text-h6 uppercase">Cart (3)</h6>
          <button className="opacity-50">Remove all</button>
        </div>
        <div className="mb-[32px] flex flex-col gap-[24px]">
          <Item />
          <Item />
          <Item />
        </div>
        {/* Total */}
        <div className="mb-[24px] flex justify-between">
          <h6 className="text-body uppercase opacity-50">Total</h6>
          <span className="text-h6">$ 5,396</span>
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
      </div>
    </div>
  )
}
