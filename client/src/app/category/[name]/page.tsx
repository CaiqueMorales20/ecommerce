import Showcase from '@/components/Showcase'
import Item from './Item'
import Pitch from '@/components/Pitch'

// Functional Component
export default function Category({ params }: { params: { name: string } }) {
  // Rendering
  return (
    <main className="bg-white">
      {/* Header */}
      <div className="bg-dark">
        <div className="container flex items-center justify-center border-t-[1px] border-solid border-[#979797] border-opacity-20 py-[98px]">
          <h1 className="text-h2 uppercase text-white">{params.name}</h1>
        </div>
      </div>
      {/* Body */}
      <div className="container">
        <div className="pb-[220px]">
          {Array.from([0, 0, 0]).map((item, index) => (
            <Item reversed={index % 2 !== 0} key={index} />
          ))}
        </div>
        <Showcase />
        <Pitch />
      </div>
    </main>
  )
}
