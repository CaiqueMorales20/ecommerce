import { stripe } from '@/utils/stripe'
import Image from 'next/image'
import Link from 'next/link'

// Functional Component
export default async function Footer() {
  const products = await stripe.products.list()
  const categories: string[] = []

  products.data.forEach((product) => {
    if (!categories.includes(product.metadata.category)) {
      categories.push(product.metadata.category)
    }
  })

  // Rendering
  return (
    <div className="bg-dark pb-[48px] pt-[75px]">
      <div className="container">
        <div className="mb-[56px] flex flex-col justify-between md:flex-row">
          {/* About */}
          <div className="max-w-[540px] text-center md:text-left">
            <Image
              className="mx-auto mb-[36px] md:mx-0"
              src="/logo.svg"
              alt="Logo"
              width={143}
              height={25}
            />
            <p className="mb-[48px] text-body text-white opacity-50 md:mb-0">
              Apple Center is an all in one stop to fulfill your audio needs. We
              are a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we are open 7 days a week.
            </p>
          </div>
          {/* Nav */}
          <div className="flex flex-col items-center justify-between text-center md:items-end md:text-left">
            <ul className="mb-[48px] flex max-w-max flex-col gap-[34px] md:mb-0 md:flex-row">
              <Link href="/">
                <li className="cursor-pointer text-nav uppercase text-white duration-300 hover:text-primary-300">
                  Home
                </li>
              </Link>
              {categories.map((category: string, index: number) => (
                <Link key={index} href={`/category/${category}`}>
                  <li className="cursor-pointer text-nav uppercase text-white duration-300 hover:text-primary-300">
                    {category}
                  </li>
                </Link>
              ))}
            </ul>
            <nav className="flex justify-end gap-[16px]">
              <a href="">
                <Image
                  src="/icons/facebook.svg"
                  alt="Go to facebook"
                  width={24}
                  height={24}
                />
              </a>
              <a href="">
                <Image
                  src="/icons/twitter.svg"
                  alt="Go to twitter"
                  width={24}
                  height={24}
                />
              </a>
              <a href="">
                <Image
                  src="/icons/instagram.svg"
                  alt="Go to instagram"
                  width={24}
                  height={24}
                />
              </a>
            </nav>
          </div>
        </div>
        <p className="mb-[56px] text-center text-body text-white opacity-50 md:text-left">
          Copyright 2021. All Rights Reserved
        </p>
      </div>
    </div>
  )
}
