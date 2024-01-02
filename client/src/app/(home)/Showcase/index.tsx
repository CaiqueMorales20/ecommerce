import Button from '@/components/Button'
import Image from 'next/image'

// Functional Component
export default function Showcase() {
  // Rendering
  return (
    <div className="container grid gap-[30px] md:mb-[168px] md:grid-cols-3">
      <div className="flex flex-col items-center justify-center rounded-[8px] bg-neutral-600 pb-[30px]">
        <Image
          className="-mb-[40px] -translate-y-1/2 drop-shadow-2xl"
          src="/image/headphone.png"
          alt="Earphone"
          width={122}
          height={168}
        />
        <h3 className="mb-[15px] text-h6">Headphones</h3>
        <Button type="tertiary" />
      </div>
      <div className="flex flex-col items-center justify-center rounded-[8px] bg-neutral-600 pb-[30px]">
        <Image
          className="-mb-[40px] -translate-y-1/2 drop-shadow-2xl"
          src="/image/speakers.png"
          alt="Earphone"
          width={121}
          height={146}
        />
        <h3 className="mb-[15px] text-h6">Headphones</h3>
        <Button type="tertiary" />
      </div>
      <div className="flex flex-col items-center justify-center rounded-[8px] bg-neutral-600 pb-[30px]">
        <Image
          className="-mb-[40px] -translate-y-1/2 drop-shadow-2xl"
          src="/image/earphone.png"
          alt="Earphone"
          width={178}
          height={161}
        />
        <h3 className="mb-[15px] text-h6">Headphones</h3>
        <Button type="tertiary" />
      </div>
    </div>
  )
}
