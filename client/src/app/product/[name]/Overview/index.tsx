import Button from '@/components/Button'
import Image from 'next/image'

// Functional Component
export default function Overview() {
  // Rendering
  return (
    <div className="mb-[88px] grid items-center gap-[32px] md:mb-[140px] md:grid-cols-2 md:gap-[125px] md:text-left">
      <div className="grid w-full items-center justify-center bg-neutral-600 pb-[108px] pt-[65px]">
        <Image
          className="aspect-square h-auto w-full md:aspect-auto md:w-[349px]"
          src="https://imgur.com/ddxQsoO.png"
          alt="dasdas"
          width={349}
          height={386}
        />
      </div>
      <div className="flex max-w-[445px] flex-col md:block md:items-center">
        <h2 className="mb-[24px] text-overline uppercase text-primary-300 opacity-50 md:mb-[16px]">
          New product
        </h2>
        <h1 className="mb-[24px] text-h4 uppercase text-black/50 md:mb-[32px] md:text-h2">
          XX99 Mark II Headphones
        </h1>
        <p className="mb-[24px] text-body text-black/50 opacity-75 md:mb-[40px]">
          The new XX99 Mark II headphones is the pinnacle of pristine audio. It
          redefines your premium headphone experience by reproducing the
          balanced depth and precision of studio-quality sound.
        </p>
        <p className="mb-[47px] text-h6">$ 2,999</p>
        <div>
          <Button text="Add to cart" type="primary" />
        </div>
      </div>
    </div>
  )
}
