import React from 'react'
import ProductList from './ProductList'
import Showcase from '@/app/(components)/Showcase'
import Pitch from '@/app/(components)/Pitch'
import { getProductByCategory } from '@/utils/server/getProductByCategory'

// Functional Component
export default async function Category({
  params,
}: {
  params: { name: string }
}) {
  const products = await getProductByCategory({ category: params.name })

  // Rendering
  return (
    <main className="bg-white">
      {/* Header */}
      <div className="bg-dark">
        <div className="container flex items-center justify-center border-t-[1px] border-solid border-[#979797] border-opacity-20 py-[32px] md:py-[98px]">
          <h1 className="text-h4 uppercase text-white md:text-h2">
            {params.name}
          </h1>
        </div>
      </div>
      {/* Body */}
      <div className="container">
        <ProductList products={products} />
        <Showcase />
        <Pitch />
      </div>
    </main>
  )
}
