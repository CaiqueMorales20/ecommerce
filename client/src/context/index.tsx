'use client'

import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import { ICart, IProductContext, ProductWithQuantity } from './types'

const ProductContext = createContext<IProductContext | null>(null)

// Functional Component
export default function ContextProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<ICart>([])

  function addToCard({ product }: { product: ProductWithQuantity }) {
    setCart((prev: ICart) => [...prev, product])
  }

  function clearCart() {
    setCart([])
  }

  useEffect(() => {
    console.log(cart)
  }, [cart])

  // Rendering
  return (
    <ProductContext.Provider value={{ cart, addToCard, clearCart }}>
      {children}
    </ProductContext.Provider>
  )
}

export const useProductContext = () =>
  useContext(ProductContext) as IProductContext
