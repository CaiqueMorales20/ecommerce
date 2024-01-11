'use client'

import Button from '@/app/(components)/Button'
import { useOnClickOutside } from '@/hooks/useOnClickOutside'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

type IThankYou = {
  openedMenu: boolean
  onRequestClose: () => void
}

// Functional Component
export default function ThankYou({ openedMenu, onRequestClose }: IThankYou) {
  // Variables
  const [isMenuOpened, setIsMenuOpened] = useState(false)
  const menuRef = useRef(null)
  const router = useRouter()

  useOnClickOutside(menuRef, () => onRequestClose(), 'mousedown', isMenuOpened)

  useEffect(() => {
    setIsMenuOpened(openedMenu)
  }, [openedMenu])

  // Rendering
  return (
    <div
      ref={menuRef}
      className={`fixed inset-0 -z-10 m-auto h-max w-[90%] max-w-[1440px] rounded-[8px] bg-white p-20 opacity-0 duration-300 md:w-max ${
        isMenuOpened ? 'z-30 opacity-100' : '-z-10 opacity-0'
      }`}
    >
      {/* Icon */}
      <Image
        className=" mb-[23px] md:mb-[33px]"
        src="/icons/correct.svg"
        alt="Thank you for buying"
        width={64}
        height={64}
      />
      {/* Text */}
      <h2 className="mb-[16px] max-w-[284px] text-h5 uppercase md:mb-[24px] md:text-h3">
        THANK YOU FOR YOUR ORDER
      </h2>
      <p className="mb-[24px] text-[12px] text-body opacity-50 md:mb-[33px] md:text-[15px]">
        You will receive an email confirmation shortly.
      </p>
      {/* Recipe */}
      <div className="mb-[23px] flex flex-col overflow-hidden rounded-[8px] md:mb-[46px] md:flex-row">
        {/* Items */}
        <div className="flex-1 bg-neutral-600 p-[24px]">
          <div className="flex items-center gap-[16px] border-b border-black border-opacity-[0.08] pb-[12px]">
            <div className="rounded-[8px] bg-[#f1f1f1] px-[13px] py-[12px]">
              <Image
                className="aspect-square h-auto w-[28px] max-w-[64px] md:aspect-auto md:w-full"
                src="https://imgur.com/ddxQsoO.png"
                alt="Product"
                width={349}
                height={386}
              />
            </div>
            <div className="flex-1">
              <div className="flex w-full justify-between md:gap-[42px]">
                <h5 className="text-body font-bold">XX99 MK II</h5>
                <span className="text-body opacity-50">x1</span>
              </div>
              <h6 className="text-subtitle opacity-50">$ 2,999</h6>
            </div>
          </div>
          <h6 className="pt-[12px] text-center text-subtitle opacity-50">
            and 2 other item(s)
          </h6>
        </div>
        {/* Total */}
        <div className="flex flex-col justify-center gap-[8px] bg-black pb-[19px] pl-[32px] pr-[66px] pt-[15px]">
          <h5 className="text-body uppercase text-white opacity-50">
            GRAND TOTAL
          </h5>
          <h6 className="text-h6 text-white">$ 5,446</h6>
        </div>
      </div>
      {/* Button */}
      <Button
        onClick={() => {
          router.push('/')
          onRequestClose()
        }}
        className="w-full"
        text="Back to Home"
        type="primary"
      />
    </div>
  )
}
