import Button from '@/components/Button'
import Image from 'next/image'

// Functional Component
export default function YX1() {
  // Rendering
  return (
    <div className="grid items-center gap-[30px] md:grid-cols-2">
      <div className="flex justify-center">
        <Image
          className="h-full w-full"
          src="/image/yx1.png"
          alt="ZX9 Speaker"
          width={530}
          height={420}
        />
      </div>
      <div className="flex h-full w-full flex-col justify-center rounded-lg bg-[#F1F1F1] py-[41px] pl-[24px] md:py-0 md:pl-[95px]">
        <h2 className="mb-[24px] text-h4 text-dark md:text-h1">
          YX1 EARPHONES
        </h2>
        <Button type="secondary" />
      </div>
    </div>
  )
}
