import { render } from '@testing-library/react'
import { AppProvider } from 'contexts'
import { CategoryList } from '.'

describe('<CategoryList />', () => {
  it('should render', () => {
    const mockCategories = [
      'Caixa de areia e limpeza',
      'Caminhas e Outros',
      'Brinquedos',
      'Coleiras',
      'Ossos e Petiscos'
    ]

    const { getByText } = render(
      <AppProvider>
        <CategoryList categories={mockCategories} />
      </AppProvider>
    )

    expect(getByText(/Sugestão do Vendedor/i)).toBeInTheDocument()
  })
})
