import Button from '@/app/(components)/Button'
import { stripe } from '@/utils/stripe'
import Image from 'next/image'
import Link from 'next/link'

// Functional Component
export default async function Hero() {
  const products = await stripe.products.list()
  const lastProduct = products.data[0]

  // Rendering
  return (
    <section className="-mt-[96px] mb-[92px] h-[70vh] overflow-hidden bg-[#131313] pt-[96px]  md:mb-[200px] md:h-[100vh]">
      <div className="container relative grid h-full place-items-center items-center border-t-[1px] border-solid border-[#979797] border-opacity-20 md:grid-cols-2">
        <div className="absolute col-start-1 row-start-1 flex max-w-[328px] flex-col items-center justify-center md:static md:block md:w-full md:max-w-full md:justify-start">
          <h2 className="mb-[24px] text-center text-overline uppercase text-white opacity-50 md:text-left">
            New product
          </h2>
          <h1 className="mb-[24px] text-center text-h2 uppercase text-white md:text-left md:text-h1">
            {lastProduct.name}
          </h1>
          <p className="mb-[40px] text-center text-body text-white opacity-75 md:text-left">
            {lastProduct.description}
          </p>
          <Link href={`../product/${lastProduct.id}`}>
            <Button text="See product" type="primary" />
          </Link>
        </div>
        <div className="col-start-1 row-start-1 flex w-full justify-center md:col-start-2 md:justify-center">
          <Image
            className="h-auto w-[50%] max-w-[120%] opacity-50 md:w-[100%] md:max-w-[600px] md:opacity-100"
            src={lastProduct.images[0]}
            alt="Hero"
            width={500}
            height={886}
          />
        </div>
      </div>
    </section>
  )
}
