import Image from 'next/image'

// Functional Component
export default function Footer() {
  // Rendering
  return (
    <div className="bg-dark pb-[48px] pt-[75px]">
      <div className="container">
        <div className="mb-[56px] flex justify-between">
          {/* About */}
          <div className="max-w-[540px]">
            <Image
              className="mb-[36px]"
              src="/logo.svg"
              alt="Logo"
              width={143}
              height={25}
            />
            <p className="text-body text-white opacity-50">
              Audiophile is an all in one stop to fulfill your audio needs. We
              are a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we are open 7 days a week.
            </p>
          </div>
          {/* Nav */}
          <div className="flex flex-col justify-between">
            <ul className="flex max-w-max gap-[34px]">
              <li className="cursor-pointer text-nav uppercase text-white duration-300 hover:text-primary-300">
                Home
              </li>
              <li className="cursor-pointer text-nav uppercase text-white duration-300 hover:text-primary-300">
                Headphones
              </li>
              <li className="cursor-pointer text-nav uppercase text-white duration-300 hover:text-primary-300">
                Speakers
              </li>
              <li className="cursor-pointer text-nav uppercase text-white duration-300 hover:text-primary-300">
                Earphones
              </li>
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
        <p className="mb-[56px] text-body text-white opacity-50">
          Copyright 2021. All Rights Reserved
        </p>
      </div>
    </div>
  )
}
