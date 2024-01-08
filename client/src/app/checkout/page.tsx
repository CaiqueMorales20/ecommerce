'use client'

import React from 'react'
import GoBackBtn from '../(components)/GoBackBtn'
import Billing from './Billing'
import Shipping from './Shipping'
import Payment from './Payment'

// Functional Component
export default function Checkout() {
  // Rendering
  return (
    <div className="bg-[#f2f2f2]">
      <div className="container pb-[141px] pt-[16px] md:pt-[79px]">
        <GoBackBtn />
        <div className="grid grid-cols-checkout gap-[30px]">
          <div className="rounded-[8px] bg-white p-[48px] pt-[58px]">
            <h1 className="mb-[41px] text-h3 uppercase">Checkout</h1>
            <div className="flex flex-col gap-[53px]">
              <Billing />
              <Shipping />
              <Payment />
            </div>
          </div>
          <div className="rounded-[8px] bg-white px-[33px] py-[32px]"></div>
        </div>
      </div>
    </div>
  )
}
