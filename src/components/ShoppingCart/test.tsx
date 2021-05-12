import { render } from '@testing-library/react'
import { AppProvider } from 'contexts'
import { ShoppingCart } from '.'

describe('<ShoppingCart />', () => {
  it('should render', () => {
    const { getByText } = render(
      <AppProvider>
        <ShoppingCart />
      </AppProvider>
    )

    expect(getByText(/Produtos no Carrinho/i)).toBeInTheDocument()
  })
})
