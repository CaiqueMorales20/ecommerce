import Showcase from '@/components/Showcase'
import Item from './Item'
import Pitch from '@/components/Pitch'
import { products } from '@/data/products'

// Functional Component
export default function Category({ params }: { params: { name: string } }) {
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
        <div className="flex flex-col gap-[120px] pb-[220px] pt-[64px] md:block md:pt-0">
          {products.map((product, index) => {
            if (product.category === params.name) {
              return (
                <Item
                  name={product.name}
                  description={product.description}
                  photoPath={product.photoPath}
                  slug={product.slug}
                  category={product.category}
                  reversed={index % 2 !== 0}
                  key={index}
                />
              )
            }
            return <></>
          })}
        </div>
        <Showcase />
        <Pitch />
      </div>
    </main>
  )
}
