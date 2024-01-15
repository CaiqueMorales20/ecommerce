import Image from 'next/image'
import Button from '../../Button'
import { useRouter } from 'next/navigation'

interface ICategoryItem {
  name: string
  slug: string
  icon: string
}

// Functional Component
export default function CategoryItem({ name, slug, icon }: ICategoryItem) {
  const router = useRouter()

  // Rendering
  return (
    <div className="flex flex-col items-center justify-center rounded-[8px] bg-neutral-600 pb-[22px] md:pb-[30px]">
      <Image
        className="-mb-[40px] h-auto w-[79px] -translate-y-1/2 drop-shadow-2xl md:w-[122px]"
        src={icon}
        alt={name}
        width={122}
        height={168}
      />
      <h3 className="mb-[15px] text-h6 uppercase">{name}</h3>
      <Button
        onClick={() => router.push(`/category/${slug}`)}
        text="shop"
        type="tertiary"
      />
    </div>
  )
}
