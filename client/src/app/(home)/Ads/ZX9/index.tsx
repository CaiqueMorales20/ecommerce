import Button from '@/components/Button'
import Image from 'next/image'

// Functional Component
export default function ZX9() {
  // Rendering
  return (
    <div className="mb-[48px] grid rounded-lg bg-primary px-[22px] py-[55px] text-center md:grid-cols-2 md:pb-0 md:pt-[133px] md:text-left">
      <div className="flex justify-center">
        <Image
          className="mb-[32px] h-auto w-[172px] md:mb-0 md:w-[400px]"
          src="/image/zx9.png"
          alt="ZX9 Speaker"
          width={400}
          height={493}
        />
      </div>
      <div className="flex max-w-[349px] flex-col items-center md:block">
        <h2 className="mb-[24px] text-h2 text-white md:text-h1">ZX9 Speaker</h2>
        <p className="mb-[40px] text-body text-white/75">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <Button type="secondary-reverse" />
      </div>
    </div>
  )
}
