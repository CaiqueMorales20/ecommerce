import Image from 'next/image'

import { IProduct } from './types'
import Link from 'next/link'
import Button from '@/app/(components)/Button'

// Functional Component
export default function Item({
  name,
  description,
  photoPath,
  reversed,
  slug,
}: IProduct & { reversed: boolean }) {
  // Rendering
  return (
    <div className="grid items-center gap-[32px] text-center md:grid-cols-2 md:gap-[125px] md:pt-[160px] md:text-left">
      <div
        className={`grid w-full items-center justify-center bg-neutral-600 pb-[108px] pt-[65px] ${
          reversed && 'md:col-start-2'
        }`}
      >
        <Image
          className="aspect-square h-auto w-full md:w-[349px]"
          src={photoPath}
          alt={name}
          width={349}
          height={386}
        />
      </div>
      <div
        className={`flex max-w-[445px] flex-col items-center md:block ${
          reversed && 'md:col-start-1 md:row-start-1'
        }`}
      >
        <h2 className="mb-[24px] text-overline uppercase text-primary-300 opacity-50 md:mb-[16px]">
          New product
        </h2>
        <h1 className="mb-[24px] text-h4 uppercase text-black/50 md:mb-[32px] md:text-h2">
          {name}
        </h1>
        <p className="mb-[24px] text-body text-black/50 opacity-75 md:mb-[40px]">
          {description}
        </p>
        <Link href={`../product/${slug}`}>
          <Button text="See product" type="primary" />
        </Link>
      </div>
    </div>
  )
}
