import { Product } from '@/types/product'
import React from 'react'
import Item from '../Item'

// Functional Component
export default function ProductList({ products }: { products: Product[] }) {
  if (!products) return <></>

  // Rendering
  return (
    <div className="flex flex-col gap-[120px] pb-[220px] pt-[64px] md:block md:pt-0">
      {products.map((product, index) => (
        <Item {...product} reversed={index % 2 !== 0} key={index} />
      ))}
    </div>
  )
}
