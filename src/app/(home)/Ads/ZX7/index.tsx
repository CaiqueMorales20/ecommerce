import Button from '@/components/Button'
import Image from 'next/image'

// Functional Component
export default function ZX7() {
  // Rendering
  return (
    <div className="grid-cols-ad mb-[48px] grid items-center rounded-lg bg-[#979797]">
      <div className="max-w-[349px] pl-[95px]">
        <h2 className="mb-[24px] text-h1 text-dark">ZX7 Speaker</h2>
        <Button type="secondary" />
      </div>
      <div className="flex justify-center">
        <Image
          src="/image/zx9.png"
          alt="ZX9 Speaker"
          width={400}
          height={493}
        />
      </div>
    </div>
  )
}
