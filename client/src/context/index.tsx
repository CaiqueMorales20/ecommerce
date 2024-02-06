'use client'

import { ReactNode, createContext, useContext, useState } from 'react'
import { IProductContext, ProductWithQuantity } from './types'

const ProductContext = createContext<IProductContext | null>(null)

// Functional Component
export default function ContextProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<ProductWithQuantity[]>([])

  function addToCard({ product }: { product: ProductWithQuantity }) {
    const isProductAlreadyAdded = cart.some((item) => item.id === product.id)

    const newContent = cart.map((productExistent) => {
      if (product.id === productExistent.id) {
        return {
          ...productExistent,
          quantity: productExistent.quantity + 1,
        }
      }
      return productExistent
    })

    if (!isProductAlreadyAdded) {
      setCart((prev: ProductWithQuantity[]) => [...prev, product])
    } else {
      setCart(newContent)
    }
  }

  function reduceItem(idToReduce: string) {
    const newCartContent = cart.map((product) => {
      if (product.id === idToReduce) {
        return { ...product, quantity: product.quantity - 1 }
      }
      return product
    })

    setCart(newCartContent)
  }

  function increaseItem(idToIncrease: string) {
    const newCartContent = cart.map((product) => {
      if (product.id === idToIncrease) {
        return { ...product, quantity: product.quantity + 1 }
      }
      return product
    })

    setCart(newCartContent)
  }

  function deleteItem(idToDelete: string) {
    const newCartContent = cart.filter((product) => {
      return product.id !== idToDelete
    })

    setCart(newCartContent)
  }

  function clearCart() {
    setCart([])
  }

  // useEffect(() => {
  //   console.log(cart)
  // }, [cart])

  // Rendering
  return (
    <ProductContext.Provider
      value={{
        cart,
        addToCard,
        increaseItem,
        reduceItem,
        deleteItem,
        clearCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export const useProductContext = (): IProductContext =>
  useContext(ProductContext) as IProductContext
