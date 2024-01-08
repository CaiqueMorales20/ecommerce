import Image from 'next/image'
import Link from 'next/link'
import Button from '../Button'

// Functional Component
export default function Showcase() {
  // Rendering
  return (
    <div className="mb-[120px] grid gap-[68px] md:mb-[168px] md:grid-cols-3 md:gap-[30px]">
      <div className="flex flex-col items-center justify-center rounded-[8px] bg-neutral-600 pb-[22px] md:pb-[30px]">
        <Image
          className="-mb-[40px] h-auto w-[79px] -translate-y-1/2 drop-shadow-2xl md:w-[122px]"
          src="/image/headphone.png"
          alt="Earphone"
          width={122}
          height={168}
        />
        <h3 className="mb-[15px] text-h6 uppercase">Headphones</h3>
        <Link href="/category/headphones">
          <Button text="shop" type="tertiary" />
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center rounded-[8px] bg-neutral-600 pb-[22px] md:pb-[30px]">
        <Image
          className="-mb-[40px] h-auto w-[84px] -translate-y-1/2 drop-shadow-2xl md:w-[121px]"
          src="/image/speakers.png"
          alt="Earphone"
          width={121}
          height={146}
        />
        <h3 className="mb-[15px] text-h6 uppercase">Speakers</h3>
        <Link href="/category/speakers">
          <Button text="shop" type="tertiary" />
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center rounded-[8px] bg-neutral-600 pb-[22px] md:pb-[30px]">
        <Image
          className="-mb-[40px] h-auto w-[147px] -translate-y-1/2 drop-shadow-2xl md:w-[178px]"
          src="/image/earphone.png"
          alt="Earphone"
          width={178}
          height={161}
        />
        <h3 className="mb-[15px] text-h6 uppercase">Earphones</h3>
        <Link href="/category/earphones">
          <Button text="shop" type="tertiary" />
        </Link>
      </div>
    </div>
  )
}
