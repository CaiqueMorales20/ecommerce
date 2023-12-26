interface ButtonType {
  type: 'primary' | 'secondary' | 'tertiary'
}

// Functional Component
export default function Button({ type }: ButtonType) {
  // Rendering
  return (
    <button
      className={`px-[30px]  py-[15px] text-subtitle uppercase  duration-300 
      
        ${
          type === 'primary'
            ? 'borde-[1px] solid border border-primary bg-primary text-white hover:border-primary-300 hover:bg-primary-300'
            : type === 'secondary'
              ? 'borde-[1px] solid border border-black bg-white text-black hover:bg-black hover:text-white'
              : ''
        }
      `}
    >
      See product
    </button>
  )
}
