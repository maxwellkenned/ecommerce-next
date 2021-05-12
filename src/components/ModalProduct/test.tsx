import { render } from '@testing-library/react'
import { AppProvider } from 'contexts'
import { ModalProduct } from '.'

describe('<ModalProduct />', () => {
  it('should render', () => {
    const mockProduct = {
      id: 1,
      name: 'Areia Sanitária',
      promo: true,
      image:
        'https://www.petlove.com.br/images/products/234558/product/Chalesco_noblue.jpg',
      price: '28,71',
      oldPrice: '31,90',
      percent: '10',
      category: 'Caixa de areia e limpeza'
    }

    const { getByText } = render(
      <AppProvider>
        <ModalProduct
          product={mockProduct}
          isOpen={true}
          toggle={() => false}
        />
      </AppProvider>
    )

    expect(getByText(/Areia Sanitária/i)).toBeInTheDocument()
  })
})
