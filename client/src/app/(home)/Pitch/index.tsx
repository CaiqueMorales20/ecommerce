import Image from 'next/image'

// Functional Component
export default function Pitch() {
  // Rendering
  return (
    <div className="container grid grid-cols-2 items-center gap-[125px] pb-[200px]">
      <div>
        <h2 className="mb-[32px] max-w-[445px] text-h2 uppercase">
          Bringing you the <span className="text-primary">best</span> audio gear
        </h2>
        <p className="text-body opacity-50">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <Image
        className="h-full w-full"
        src="/image/dude.png"
        alt="ZX9 Speaker"
        width={540}
        height={588}
      />
    </div>
  )
}
