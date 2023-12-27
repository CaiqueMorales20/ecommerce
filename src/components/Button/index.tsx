import Image from 'next/image'

interface ButtonType {
  type: 'primary' | 'secondary' | 'tertiary'
}

// Functional Component
export default function Button({ type }: ButtonType) {
  // Rendering
  return (
    <button
      className={`flex  items-center gap-[13.3px] px-[30px] py-[15px] text-subtitle uppercase duration-300 
        ${
          type === 'primary'
            ? 'solid border border-primary bg-primary text-white hover:border-primary-300 hover:bg-primary-300'
            : type === 'secondary'
              ? ' solid border border-black bg-white text-black hover:bg-black hover:text-white'
              : type === 'tertiary'
                ? 'text-black/50 hover:text-primary'
                : ''
        }
      `}
    >
      See product
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
