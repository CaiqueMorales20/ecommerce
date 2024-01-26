import Image from 'next/image'

// Functional Component
export default function Pitch() {
  // Rendering
  return (
    <div className="flex flex-col-reverse items-center gap-[40px] pb-[120px] text-center md:grid md:grid-cols-2 md:gap-[125px] md:pb-[200px] md:text-left">
      <div>
        <h2 className="mb-[32px] max-w-[445px] text-h2 uppercase">
          Unleash the <span className="text-primary">Power</span> of Innovation
        </h2>
        <p className="mb-[10px] text-body opacity-50">
          Elevate your tech game, where cutting-edge meets convenience. Explore
          a curated selection of authentic Apple products, from the latest
          releases to must-have accessories. Our platform offers an effortless
          shopping experience, ensuring you stay ahead in the world of premium
          technology.
        </p>
        <p className="text-body opacity-50">
          Secure transactions, exclusive deals, and a commitment to quality make
          Apple Center the go-to destination for all your Apple needs. Shop now
          and embrace the future of innovation.
        </p>
      </div>
      <Image
        className="h-auto w-full"
        src="/image/dude.png"
        alt="ZX9 Speaker"
        width={540}
        height={588}
      />
    </div>
  )
}
