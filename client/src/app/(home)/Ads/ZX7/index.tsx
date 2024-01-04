import Button from '@/components/Button'
import Image from 'next/image'

// Functional Component
export default function ZX7() {
  // Rendering
  return (
    <div className="relative mb-[48px] grid grid-cols-ad items-center overflow-hidden rounded-lg bg-[#979797] py-[101px] md:py-0">
      <div className="max-w-[349px] pl-[24px] md:max-w-full md:pl-[95px]">
        <h2 className="mb-[24px] text-h4 text-dark md:text-h1">ZX7 Speaker</h2>
        <Button type="secondary" />
      </div>
      <div className="absolute -right-[55%] flex rotate-180 justify-center md:static md:rotate-0">
        <Image
          className="h-auto w-[375px] md:w-[400px]"
          src="/image/zx9.png"
          alt="ZX9 Speaker"
          width={400}
          height={493}
        />
      </div>
    </div>
  )
}
