import Button from '@/components/Button'
import Image from 'next/image'

// Functional Component
export default function Item({ reversed }: { reversed: boolean }) {
  // Rendering
  return (
    <div className="grid items-center gap-[125px] pt-[160px] md:grid-cols-2">
      <div
        className={`grid w-full items-center justify-center bg-neutral-600 pb-[108px] pt-[65px] ${
          reversed && 'col-start-2'
        }`}
      >
        <Image
          src="/image/earphones/phone1.png"
          alt="Phone 1"
          width={349}
          height={386}
        />
      </div>
      <div className={`max-w-[445px] ${reversed && 'col-start-1 row-start-1'}`}>
        <h2 className="mb-[16px] text-overline uppercase text-primary-300 opacity-50">
          New product
        </h2>
        <h1 className="mb-[32px] text-h2 uppercase text-black/50">
          XX99 Mark II Headphones
        </h1>
        <p className="mb-[40px] text-body text-black/50 opacity-75">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Button type="primary" />
      </div>
    </div>
  )
}
