import Image from 'next/image'

type IRadio = {
  name: string
  onClick: () => void
  selected: boolean
  className?: string
}

// Functional Component
export default function Radio({ name, onClick, selected, className }: IRadio) {
  // Rendering
  return (
    <div
      onClick={onClick}
      className={`flex cursor-pointer gap-[16px] rounded-[8px] border border-[#cfcfcf] px-[24px] py-[18px] text-subtitle ${className}`}
    >
      {selected ? (
        <Image
          src="/icons/selected-true.svg"
          alt="Selecionar"
          width={20}
          height={20}
        />
      ) : (
        <Image
          src="/icons/selected-false.svg"
          alt="Selecionar"
          width={20}
          height={20}
        />
      )}
      {name}
    </div>
  )
}
