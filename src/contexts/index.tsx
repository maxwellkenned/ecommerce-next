import { ReactNode } from 'react'
import { ProductProvider } from './Products'
import { ShoppingProvider } from './Shopping'

interface IAppProviderProps {
  children: ReactNode
}

export const AppProvider = ({ children }: IAppProviderProps) => {
  return (
    <ProductProvider>
      <ShoppingProvider>{children}</ShoppingProvider>
    </ProductProvider>
  )
}
