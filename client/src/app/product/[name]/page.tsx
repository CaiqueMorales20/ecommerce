import Pitch from '@/components/Pitch'
import Description from './Description'
import GoBackBtn from './GoBackBtn'
import Likeable from './Likeable'
import Overview from './Overview'
import Photos from './Photos'

// Functional Component
export default function Product() {
  // Rendering
  return (
    <main className="container pt-[16px] md:pt-[79px]">
      <GoBackBtn />
      <Overview />
      <Description />
      <Photos />
      <Likeable />
      <Pitch />
    </main>
  )
}
