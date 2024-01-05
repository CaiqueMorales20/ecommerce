import GoBackBtn from './GoBackBtn'

// Functional Component
export default function Product({ params }: { params: { name: string } }) {
  // Rendering
  return (
    <main className="container pt-[79px]">
      <GoBackBtn />
    </main>
  )
}
