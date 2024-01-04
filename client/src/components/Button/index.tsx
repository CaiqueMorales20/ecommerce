import Image from 'next/image'

interface ButtonType {
  type: 'primary' | 'secondary' | 'secondary-reverse' | 'tertiary'
  onClick?: () => void
}

// Functional Component
export default function Button({ type, onClick }: ButtonType) {
  // Rendering
  return (
    <button
      onClick={onClick}
      className={`flex w-max items-center gap-[13.3px] px-[30px] py-[15px] text-subtitle uppercase duration-300 
        ${
          type === 'primary'
            ? 'solid border border-primary bg-primary text-white hover:border-primary-300 hover:bg-primary-300'
            : type === 'secondary'
              ? ' solid border border-black bg-transparent text-black hover:bg-black hover:text-white'
              : type === 'secondary-reverse'
                ? ' solid border border-black bg-black text-white hover:bg-transparent hover:text-black'
                : type === 'tertiary'
                  ? 'text-black/50 hover:text-primary'
                  : ''
        }
      `}
    >
      {type === 'tertiary' ? (
        <>
          Shop
          <Image
            src="/icons/arrow-right.svg"
            width={7}
            height={12}
            alt="Go shop"
          />
        </>
      ) : (
        'See Product'
      )}
    </button>
  )
}
