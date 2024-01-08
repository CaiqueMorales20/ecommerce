type IInput = {
  name: string
  value: string | number
  placeholder: string
  onChange: (e: React.FormEvent<HTMLInputElement>) => void
  className?: string
}

// Functional Component
export default function Input({
  name,
  value,
  placeholder,
  onChange,
  className,
}: IInput) {
  // Rendering
  return (
    <div className={`flex flex-col gap-[9px] ${className}`}>
      <label className="text-subtitle">{name}</label>
      <input
        className="rounded-[8px] border border-[#cfcfcf] px-[24px] py-[18px] text-subtitle"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}
