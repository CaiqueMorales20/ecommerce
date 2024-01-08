import GoBackBtn from '@/app/(components)/GoBackBtn'
import Description from './Description'
import Likeable from './Likeable'
import Overview from './Overview'
import Photos from './Photos'
import Pitch from '@/app/(components)/Pitch'

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
