import { ProductWithQuantity } from '@/context/types'
import Image from 'next/image'

// Functional Component
export default function Item(product: ProductWithQuantity) {
  // Rendering
  return (
    <div className="flex items-center gap-[16px]">
      <div className="h-[64px] w-[64px] rounded-[8px] bg-[#f1f1f1] px-[13px] py-[12px]">
        <Image
          className="aspect-square h-auto w-full md:aspect-auto"
          src={product.images[0]}
          alt={product.name}
          width={349}
          height={386}
        />
      </div>
      <div className="flex-1">
        <div className="flex w-full justify-between">
          <h5 className="text-body font-bold">{product.name}</h5>
          <span className="text-body opacity-50">x{product.quantity}</span>
        </div>
        <h6 className="text-subtitle opacity-50">{product.price}</h6>
      </div>
    </div>
  )
}
