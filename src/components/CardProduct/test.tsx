import { render } from '@testing-library/react'
import { CardProduct } from '.'

describe('<CardProduct />', () => {
  it('should render', () => {
    const mockProduct = {
      id: 1,
      name: 'Areia Sanitária Chalesco Cristais de Sílica',
      promo: true,
      image:
        'https://www.petlove.com.br/images/products/234558/product/Chalesco_noblue.jpg',
      price: '28,71',
      oldPrice: '31,90',
      percent: '10',
      category: 'Caixa de areia e limpeza'
    }

    const { getByText } = render(
      <CardProduct
        product={mockProduct}
        onClick={() => {
          console.log('funcionou')
        }}
      />
    )

    expect(getByText(/10% OFF/i)).toBeInTheDocument()
  })
})
