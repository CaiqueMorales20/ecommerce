import Button from '@/components/Button'
import Image from 'next/image'

// Functional Component
export default function Likeable() {
  // Rendering
  return (
    <div className="mb-[160px]">
      <h3 className="pb-[64px] text-center text-h3 uppercase">
        you may also like
      </h3>
      <div className="grid gap-[30px] md:grid-cols-3">
        {/* Item */}
        <div className="flex flex-col items-center">
          <div className="mb-[40px] grid w-full place-items-center rounded-[8px] bg-neutral-600 py-[62px]">
            <Image
              src="https://imgur.com/feZo8rr.png"
              alt="Headphone"
              width={148}
              height={193}
            />
          </div>
          <h4 className="mb-[32px] text-h6 uppercase">XX99 MARK I</h4>
          <Button text="See product" type="primary" />
        </div>
        {/* Item */}
        <div className="flex flex-col items-center">
          <div className="mb-[40px] grid w-full place-items-center rounded-[8px] bg-neutral-600 py-[62px]">
            <Image
              src="https://imgur.com/feZo8rr.png"
              alt="Headphone"
              width={148}
              height={193}
            />
          </div>
          <h4 className="mb-[32px] text-h6 uppercase">XX99 MARK I</h4>
          <Button text="See product" type="primary" />
        </div>
        {/* Item */}
        <div className="flex flex-col items-center">
          <div className="mb-[40px] grid w-full place-items-center rounded-[8px] bg-neutral-600 py-[62px]">
            <Image
              src="https://imgur.com/feZo8rr.png"
              alt="Headphone"
              width={148}
              height={193}
            />
          </div>
          <h4 className="mb-[32px] text-h6 uppercase">XX99 MARK I</h4>
          <Button text="See product" type="primary" />
        </div>
      </div>
    </div>
  )
}
