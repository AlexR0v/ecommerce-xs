import { createContext, Dispatch, FC, ReactNode, useContext, useState } from 'react'
import { toast }                                                        from 'react-hot-toast'
import { Product }                                                      from '../types/index'

interface IStateContext {
  children: ReactNode
}

interface IContext {
  showCart: boolean
  setShowCart: Dispatch<boolean>
  cartItems: Product[]
  totalPrice: number
  totalQuantities: number
  qty: number
  incQty: () => void
  decQty: () => void
  onAdd: (product: Product, quantity: number) => void
  toggleCartItemQuanitity: (id: string, value: string) => void
  onRemove: (product: Product) => void
  setCartItems: Dispatch<Product[]>
  setTotalPrice: Dispatch<number>
  setTotalQuantities: Dispatch<number>
}

const Context = createContext<Partial<IContext>>({})

export const StateContext: FC<IStateContext> = ({ children }) => {

  const [showCart, setShowCart] = useState(false)
  const [cartItems, setCartItems] = useState<Product[]>([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalQuantities, setTotalQuantities] = useState(0)
  const [qty, setQty] = useState(1)

  let foundProduct: Product | undefined
  let index: number

  const onAdd = (product: Product, quantity: number) => {
    const checkProductInCart = cartItems.find((item) => item._id === product._id)

    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity)
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity)

    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id) return {
          ...cartProduct,
          quantity: cartProduct.quantity + quantity
        }
      })

      setCartItems(updatedCartItems as Product[])
    } else {
      product.quantity = quantity

      setCartItems([...cartItems, { ...product }])
    }

    toast.success(`${qty} ${product.name} added to the cart.`)
  }

  const onRemove = (product: Product) => {
    foundProduct = cartItems.find((item) => item._id === product._id)
    const newCartItems = cartItems.filter((item) => item._id !== product._id)

    setTotalPrice((prevTotalPrice) => prevTotalPrice - (foundProduct ? foundProduct.price : 0) *
      (foundProduct ? foundProduct.quantity : 1))
    setTotalQuantities(prevTotalQuantities => prevTotalQuantities - (foundProduct ? foundProduct.quantity : 0))
    setCartItems(newCartItems)
  }

  const toggleCartItemQuanitity = (id: string, value: string) => {
    foundProduct = cartItems.find((item) => item._id === id)
    index = cartItems.findIndex((product) => product._id === id)
    const newCartItems = cartItems.filter((item) => item._id !== id)

    if (value === 'inc') {
      setCartItems(
        [...newCartItems, { ...foundProduct, quantity: (foundProduct ? foundProduct.quantity : 0) + 1 }] as Product[])
      setTotalPrice((prevTotalPrice) => prevTotalPrice + (foundProduct ? foundProduct.price : 0))
      setTotalQuantities(prevTotalQuantities => prevTotalQuantities + 1)
    } else if (value === 'dec') {
      if (foundProduct && foundProduct.quantity > 1) {
        setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity - 1 }])
        setTotalPrice((prevTotalPrice) => prevTotalPrice - (foundProduct ? foundProduct.price : 0))
        setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1)
      }
    }
  }

  const incQty = () => {
    setQty((prevQty) => prevQty + 1)
  }

  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1

      return prevQty - 1
    })
  }

  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        onAdd,
        toggleCartItemQuanitity,
        onRemove,
        setCartItems,
        setTotalPrice,
        setTotalQuantities
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context)
