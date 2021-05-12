import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState
} from 'react'
import { IProduct } from 'types/IProduct'

interface IProductCart extends IProduct {
  quantity: number
}

interface IShoppingContextData {
  shoppingCart: IProductCart[]
  totalQuantity: number
  totalPrice: number
  addProduct: (product: IProductCart) => void
  removeProduct: (id: number) => void
}

interface IShoppingProviderProps {
  children: ReactNode
}

const ShoppingContext = createContext({} as IShoppingContextData)

export const ShoppingProvider = ({ children }: IShoppingProviderProps) => {
  const [shoppingCart, setShoppingCart] = useState<IProductCart[]>([])

  const totalQuantity = useMemo(() => {
    let total = 0

    shoppingCart.forEach(product => {
      total += product.quantity
    })

    return total
  }, [shoppingCart])

  const totalPrice = useMemo(() => {
    let total = 0

    shoppingCart.forEach(product => {
      const price =
        Number(product.price.replace(',', '.')) * Number(product.quantity)

      total += price
    })

    return Number(total.toFixed(2))
  }, [shoppingCart])

  const addProduct = useCallback(
    (product: IProductCart) => {
      const productIndex = shoppingCart.findIndex(
        item => product.id === item.id
      )

      if (productIndex >= 0) {
        setShoppingCart(state =>
          state.map((item, index) => (index === productIndex ? product : item))
        )
        return
      }

      setShoppingCart(state => [...state, product])
    },
    [shoppingCart]
  )

  const removeProduct = useCallback(
    (id: number) => {
      const productIndex = shoppingCart.findIndex(item => item.id === id)

      productIndex && setShoppingCart(state => state.splice(productIndex, 1))
    },
    [shoppingCart]
  )

  return (
    <ShoppingContext.Provider
      value={{
        shoppingCart,
        totalQuantity,
        totalPrice,
        addProduct,
        removeProduct
      }}
    >
      {children}
    </ShoppingContext.Provider>
  )
}

export const useShopping = () => {
  const context = useContext(ShoppingContext)

  if (!context) {
    throw new Error('useShopping deve ser usado dentro de ShoppingPrivider')
  }

  return context
}
