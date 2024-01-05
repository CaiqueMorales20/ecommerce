import Image from 'next/image'

interface ButtonType {
  text: string
  type: 'primary' | 'secondary' | 'secondary-reverse' | 'tertiary'
  onClick?: () => void
}

// Functional Component
export default function Button({ text, type, onClick }: ButtonType) {
  // Variables
  const baseVariation =
    'flex w-max items-center gap-[13.3px] px-[30px] py-[15px] text-subtitle uppercase duration-300'
  const variation1 =
    'solid border border-primary bg-primary text-white hover:border-primary-300 hover:bg-primary-300'
  const variation2 =
    ' solid border border-black bg-transparent text-black hover:bg-black hover:text-white'
  const variation2r =
    ' solid border border-black bg-black text-white hover:bg-transparent hover:text-black'
  const variation3 = 'text-black/50 hover:text-primary'

  const currentVarriation =
    type === 'primary'
      ? variation1
      : type === 'secondary'
        ? variation2
        : type === 'secondary-reverse'
          ? variation2r
          : type === 'tertiary'
            ? variation3
            : ''

  // Rendering
  return (
    <button onClick={onClick} className={baseVariation + currentVarriation}>
      {text}
      {type === 'tertiary' && (
        <Image
          src="/icons/arrow-right.svg"
          width={7}
          height={12}
          alt="Go shop"
        />
      )}
    </button>
  )
}
