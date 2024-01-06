import Image from 'next/image'

// Functional Component
export default function Photos() {
  // Rendering
  return (
    <div className="mb-[120px] grid grid-rows-2 gap-[30px] md:mb-[160px] md:grid-cols-photos">
      <Image
        className="h-full w-full object-cover"
        src="https://imgur.com/KnYU9Sm.png"
        alt="Imagem 1"
        width={445}
        height={280}
      />
      <Image
        className="row-start-2 h-full w-full object-cover"
        src="https://imgur.com/kGaUdOy.png"
        alt="Imagem 2"
        width={445}
        height={280}
      />
      <Image
        className="row-span-2 h-full w-full object-cover"
        src="https://imgur.com/rLDQfSL.png"
        alt="Imagem 3"
        width={635}
        height={592}
      />
    </div>
  )
}
