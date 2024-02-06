'use client'

import { useOnClickOutside } from '@/hooks/useOnClickOutside'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState } from 'react'
import Cart from '../../Cart'
import { useProductContext } from '@/context'

// Functional Component
export default function Nav({ categories }: { categories: string[] }) {
  // Variables
  const [openedMenu, setOpenedMenu] = useState<boolean>(false)
  const [openedCart, setOpenedCart] = useState<boolean>(false)
  const { cart } = useProductContext()

  const menuRef = useRef(null)

  useOnClickOutside(menuRef, () => closeMenu(), 'mousedown', openedMenu)

  function openCart() {
    document.body.classList.add('cart-opened')
    setOpenedCart(true)
  }

  function closeCart() {
    if (!openedMenu) document.body.classList.remove('cart-opened')
    setOpenedCart(false)
  }

  function openMenu() {
    if (window.innerWidth < 768) document.body.classList.add('menu-opened')
    setOpenedMenu(true)
  }

  function closeMenu() {
    if (!openedCart) document.body.classList.remove('menu-opened')
    setOpenedMenu(false)
  }

  // Rendering
  return (
    <nav className="container grid grid-cols-3">
      {/* Hamburger */}
      <Image
        onClick={openMenu}
        className="md:hidden"
        src="/icons/hamburger.svg"
        alt="Audiphile"
        width={16}
        height={15}
        priority
      />
      {/* Logo */}
      <Image src="/logo.svg" alt="Audiphile" width={143} height={25} priority />
      {/* Nav */}
      <ul
        ref={menuRef}
        className={`fixed top-[126px] mx-auto flex w-[90%] flex-col items-center gap-[20px] rounded-lg  py-[20px] duration-300 md:static md:flex-row md:gap-[34px] md:rounded-none md:py-0 ${
          openedMenu
            ? 'z-30 bg-white opacity-100'
            : '-z-10 opacity-0 md:z-10 md:opacity-100'
        }`}
      >
        <Link prefetch={false} href="/">
          <li
            onClick={closeMenu}
            className="cursor-pointer text-nav uppercase text-dark duration-300 hover:text-primary-300 md:text-white"
          >
            Home
          </li>
        </Link>
        {categories.map((category: string, index: number) => (
          <Link key={index} href={`/category/${category}`}>
            <li
              onClick={closeMenu}
              className="cursor-pointer text-nav uppercase text-dark duration-300 hover:text-primary-300 md:text-white"
            >
              {category}
            </li>
          </Link>
        ))}
      </ul>
      {/* Cart */}
      <div className="relative flex gap-1 justify-self-end">
        <Image
          onClick={openCart}
          className="cursor-pointer "
          src="/icons/cart.svg"
          alt="Cart"
          width={24}
          height={20}
        />
        <p className="absolute right-0 top-0 flex aspect-square h-auto w-[1.5rem] -translate-y-1/2 translate-x-[70%] items-center justify-center rounded-full bg-white text-center text-sm">
          {cart?.length}
        </p>
      </div>
      <Cart openedMenu={openedCart} onRequestClose={closeCart} />
    </nav>
  )
}
