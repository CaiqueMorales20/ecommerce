import Image from 'next/image'

// Functional Component
export default function Header() {
  // Rendering
  return (
    <header className="bg-dark flex h-[96px] items-center ">
      <nav className="container grid grid-cols-3">
        <Image
          src="/logo.svg"
          alt="Audiphile"
          width={143}
          height={25}
          priority
        />
        <ul className="flex gap-[34px]">
          <li className="text-nav cursor-pointer uppercase text-white duration-300 hover:text-primary-300">
            Home
          </li>
          <li className="text-nav cursor-pointer uppercase text-white duration-300 hover:text-primary-300">
            Headphones
          </li>
          <li className="text-nav cursor-pointer uppercase text-white duration-300 hover:text-primary-300">
            Speakers
          </li>
          <li className="text-nav cursor-pointer uppercase text-white duration-300 hover:text-primary-300">
            Earphones
          </li>
        </ul>
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
