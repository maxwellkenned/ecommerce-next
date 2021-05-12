import { createContext, ReactNode, useContext, useState } from 'react'
import { IProduct } from 'types/IProduct'

interface IProductContextData {
  products: IProduct[]
  setProducts: (products: IProduct[]) => void
  category: string
  setCategory: (category: string) => void
}

interface IProductProviderProps {
  children: ReactNode
}

const ProductContext = createContext({} as IProductContextData)

export const ProductProvider = ({ children }: IProductProviderProps) => {
  const [products, setProducts] = useState<IProduct[]>([])
  const [category, setCategory] = useState('Sugestão do Vendedor')

  return (
    <ProductContext.Provider
      value={{
        products,
        category,
        setProducts,
        setCategory
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export const useProduct = (): IProductContextData => {
  const context = useContext(ProductContext)

  if (!context) {
    throw new Error('useProduct deve ser usado dentro de ProductContext')
  }

  return context
}
