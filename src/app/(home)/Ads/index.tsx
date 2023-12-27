import Button from '@/components/Button'
import Image from 'next/image'

// Functional Component
export default function Ads() {
  // Rendering
  return (
    <div className="container pb-[200px]">
      <div className="grid grid-cols-2 rounded-lg bg-primary pt-[133px]">
        <div className="flex justify-center">
          <Image
            src="/image/zx9.png"
            alt="ZX9 Speaker"
            width={400}
            height={493}
          />
        </div>
        <div className="max-w-[349px]">
          <h2 className="mb-[24px] text-h1 text-white">ZX9 Speaker</h2>
          <p className="mb-[40px] text-body text-white/75">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Button type="secondary-reverse" />
        </div>
      </div>
    </div>
  )
}
