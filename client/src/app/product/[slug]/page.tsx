import GoBackBtn from '@/app/(components)/GoBackBtn'
import Description from './Description'
import Likeable from './Likeable'
import Overview from './Overview'
import Photos from './Photos'
import Pitch from '@/app/(components)/Pitch'
import { getProductBySlug } from '@/utils/server/getProductBySlug'

// Functional Component
export default async function Product({
  params,
}: {
  params: { slug: string }
}) {
  const product = await getProductBySlug({ slug: params.slug })

  if (Object.values(product).length < 1) return <></>

  // Rendering
  return (
    <main className="container pt-[16px] md:pt-[79px]">
      <GoBackBtn />
      <Overview {...product} />
      <Description />
      <Photos />
      <Likeable />
      <Pitch />
    </main>
  )
}
