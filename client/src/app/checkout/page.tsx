'use client'

import React, { useState } from 'react'
import GoBackBtn from '../(components)/GoBackBtn'
import Billing from './Billing'
import Shipping from './Shipping'
import Payment from './Payment'
import Summary from './Summary'
import ThankYou from './ThankYou'
import { useProductContext } from '@/context'
import { redirect } from 'next/navigation'

// Functional Component
export default function Checkout() {
  const [isThankYouModalOpened, setIsThankYouModalOpened] =
    useState<boolean>(false)
  const { cart, clearCart } = useProductContext()

  if (cart.length < 1) redirect('/')

  function openThankYouModal() {
    document.body.classList.add('menu-opened')
    setIsThankYouModalOpened(true)
  }

  function closeThankYouModal() {
    document.body.classList.remove('menu-opened')
    setIsThankYouModalOpened(false)
    clearCart()
    redirect('/')
  }

  // Rendering
  return (
    <>
      <div className="bg-[#f2f2f2]">
        <div className="container pb-[141px] pt-[16px] md:pt-[79px]">
          <GoBackBtn />
          <div className="grid gap-[30px] md:grid-cols-checkout">
            <div className="rounded-[8px] bg-white p-[48px] pt-[58px]">
              <h1 className="mb-[41px] text-h3 uppercase">Checkout</h1>
              <div className="flex flex-col gap-[53px]">
                <Billing />
                <Shipping />
                <Payment />
              </div>
            </div>
            <div className="h-max rounded-[8px] bg-white px-[33px] py-[32px]">
              <Summary onFinish={openThankYouModal} />
            </div>
          </div>
        </div>
        <ThankYou
          openedMenu={isThankYouModalOpened}
          onRequestClose={closeThankYouModal}
        />
      </div>
    </>
  )
}
