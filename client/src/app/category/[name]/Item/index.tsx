import Button from '@/components/Button'
import Image from 'next/image'
import { IProduct } from './types'

// Functional Component
export default function Item({
  name,
  description,
  photoPath,
  reversed,
}: IProduct & { reversed: boolean }) {
  // Rendering
  return (
    <div className="grid items-center gap-[125px] pt-[160px] md:grid-cols-2">
      <div
        className={`grid w-full items-center justify-center bg-neutral-600 pb-[108px] pt-[65px] ${
          reversed && 'col-start-2'
        }`}
      >
        <Image src={photoPath} alt={name} width={349} height={386} />
      </div>
      <div className={`max-w-[445px] ${reversed && 'col-start-1 row-start-1'}`}>
        <h2 className="mb-[16px] text-overline uppercase text-primary-300 opacity-50">
          New product
        </h2>
        <h1 className="mb-[32px] text-h2 uppercase text-black/50">{name}</h1>
        <p className="mb-[40px] text-body text-black/50 opacity-75">
          {description}
        </p>
        <Button type="primary" />
      </div>
    </div>
  )
}
