import Button from '@/components/Button'
import Image from 'next/image'

// Functional Component
export default function Hero() {
  // Rendering
  return (
    <section className="-mt-[96px] mb-[200px] h-screen overflow-hidden  bg-[#131313] pt-[96px]">
      <div className="container grid h-full grid-cols-2 items-center border-t-[1px] border-solid border-[#979797] border-opacity-20">
        <div className="">
          <h2 className="mb-[24px] text-overline uppercase text-white opacity-50">
            New product
          </h2>
          <h1 className="mb-[24px] text-h1 uppercase text-white">
            XX99 Mark II HeadphoneS
          </h1>
          <p className="mb-[40px] text-body text-white opacity-75">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button type="primary" />
        </div>
        <div className="flex w-full justify-end">
          <Image
            className="h-auto max-w-full"
            src="/image/hero-img.png"
            alt="Hero"
            width={500}
            height={886}
          />
        </div>
      </div>
    </section>
  )
}
