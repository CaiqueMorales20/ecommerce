import Button from '../../Button'
import { useRouter } from 'next/navigation'

// Functional Component
export default function CategoryItem({ name }: { name: string }) {
  const router = useRouter()

  // Rendering
  return (
    <div className="flex flex-col items-center justify-center rounded-[8px] bg-neutral-600 pb-[22px] md:pb-[30px]">
      {/* <Image
        className="-mb-[40px] h-auto w-[79px] -translate-y-1/2 drop-shadow-2xl md:w-[122px]"
        src={icon}
        alt={name}
        width={122}
        height={168}
      /> */}
      <h3 className="mb-[15px] pt-[40px] text-h6 uppercase">{name}</h3>
      <Button
        onClick={() => router.push(`/category/${name}`)}
        text="shop"
        type="tertiary"
      />
      {/* <Button
        onClick={() => window.location.replace(`/category/${slug}`)}
        text="shop"
        type="tertiary"
      /> */}
    </div>
  )
}
