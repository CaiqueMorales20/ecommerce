import Button from '@/components/Button'

// Functional Component
export default function Hero() {
  // Rendering
  return (
    <section className="bg-dark -mt-[96px] h-screen  pt-[96px]">
      <div className="container grid h-full grid-cols-2 items-center border-t-[1px] border-solid border-[#979797] border-opacity-20">
        <div className="">
          <h2 className="text-overline mb-[24px] uppercase text-white opacity-50">
            New product
          </h2>
          <h1 className="text-h1 mb-[24px] uppercase text-white">
            XX99 Mark II HeadphoneS
          </h1>
          <p className="text-body mb-[40px] text-white opacity-75">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button type="primary" />
        </div>
      </div>
    </section>
  )
}
