'use client'

import { useOnClickOutside } from '@/hooks/useOnClickOutside'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState } from 'react'

// Functional Component
export default function Header() {
  const [openedMenu, setOpenedMenu] = useState<boolean>(false)
  const menuRef = useRef(null)

  useOnClickOutside(menuRef, () => closeMenu())

  function closeMenu() {
    document.body.classList.remove('menu-opened')
    setOpenedMenu(false)
  }

  function handleMenu() {
    document.body.classList.toggle('menu-opened')
    setOpenedMenu(!openedMenu)
  }

  // Rendering
  return (
    <header className="flex h-[96px] items-center bg-dark">
      <nav className="container grid grid-cols-3">
        {/* Hamburger */}
        <Image
          onClick={handleMenu}
          className="md:hidden"
          src="/icons/hamburger.svg"
          alt="Audiphile"
          width={16}
          height={15}
          priority
        />
        {/* Logo */}
        <Image
          src="/logo.svg"
          alt="Audiphile"
          width={143}
          height={25}
          priority
        />
        {/* Nav */}
        <ul
          ref={menuRef}
          className={`fixed top-[126px]  flex w-[90%] flex-col items-center gap-[20px] rounded-lg  py-[20px] duration-300 md:static md:flex-row md:gap-[34px] md:rounded-none md:py-0 ${
            openedMenu
              ? 'z-30 bg-white opacity-100'
              : '-z-10 opacity-0 md:z-10 md:opacity-100'
          }`}
        >
          <Link onClick={closeMenu} href="/">
            <li className="cursor-pointer text-nav uppercase text-dark duration-300 hover:text-primary-300 md:text-white">
              Home
            </li>
          </Link>
          <Link onClick={closeMenu} href="/category/headphones">
            <li className="cursor-pointer text-nav uppercase text-dark duration-300 hover:text-primary-300 md:text-white">
              Headphones
            </li>
          </Link>
          <Link onClick={closeMenu} href="/category/speakers">
            <li className="cursor-pointer text-nav uppercase text-dark duration-300 hover:text-primary-300 md:text-white">
              Speakers
            </li>
          </Link>
          <Link onClick={closeMenu} href="/category/earphones">
            <li className="cursor-pointer text-nav uppercase text-dark duration-300 hover:text-primary-300 md:text-white">
              Earphones
            </li>
          </Link>
        </ul>
        {/* Cart */}
        <Image
          className="justify-self-end"
          src="/icons/cart.svg"
          alt="Cart"
          width={24}
          height={20}
        />
      </nav>
    </header>
  )
}
