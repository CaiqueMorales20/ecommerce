import Button from '@/components/Button'
import Image from 'next/image'

// Functional Component
export default function YX1() {
  // Rendering
  return (
    <div className="grid grid-cols-2 items-center gap-[30px]">
      <div className="flex justify-center">
        <Image
          className="h-full w-full"
          src="/image/yx1.png"
          alt="ZX9 Speaker"
          width={530}
          height={420}
        />
      </div>
      <div className="flex h-full w-full flex-col justify-center rounded-lg bg-[#F1F1F1] pl-[95px]">
        <h2 className="mb-[24px] text-h1 text-dark">YX1 EARPHONES</h2>
        <Button type="secondary" />
      </div>
    </div>
  )
}
