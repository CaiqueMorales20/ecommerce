'use client'

import { ReactNode, createContext, useContext, useState } from 'react'
import { IProductContext, ProductWithQuantity } from './types'

const ProductContext = createContext<IProductContext | null>(null)

// Functional Component
export default function ContextProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<ProductWithQuantity[]>([])

  function addToCard({ product }: { product: ProductWithQuantity }) {
    const isProductAlreadyAdded = cart.some(
      (item) => item.productId === product.productId,
    )

    const newContent = cart.map((productExistent) => {
      if (product.productId === productExistent.productId) {
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

  function reduceItem(idToReduce: number) {
    const newCartContent = cart.map((product) => {
      if (product.productId === idToReduce) {
        return { ...product, quantity: product.quantity - 1 }
      }
      return product
    })

    setCart(newCartContent)
  }

  function increaseItem(idToIncrease: number) {
    const newCartContent = cart.map((product) => {
      if (product.productId === idToIncrease) {
        return { ...product, quantity: product.quantity + 1 }
      }
      return product
    })

    setCart(newCartContent)
  }

  function deleteItem(idToDelete: number) {
    const newCartContent = cart.filter((product) => {
      return product.productId !== idToDelete
    })

    setCart(newCartContent)
  }

  function clearCart() {
    setCart([])
  }

  // useEffect(() => {
  //   const newCartContent = cart.filter((product) => {
  //     return product.quantity !== 0
  //   })
  //   setCart(newCartContent)
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

export const useProductContext = () =>
  useContext(ProductContext) as IProductContext
