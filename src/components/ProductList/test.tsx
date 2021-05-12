import { render } from '@testing-library/react'
import { AppProvider } from 'contexts'
import { ProductList } from '.'

describe('<ProductList />', () => {
  it('should render', () => {
    const { getByText } = render(
      <AppProvider>
        <ProductList />
      </AppProvider>
    )

    expect(getByText(/Sugestão do Vendedor/i)).toBeInTheDocument()
  })
})
