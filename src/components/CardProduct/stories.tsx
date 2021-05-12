import { Story, Meta } from '@storybook/react'
import { CardProduct } from '.'

export default {
  title: 'CardProduct',
  component: CardProduct
} as Meta

export const Default: Story = ({ product, onClick, ...rest }) => (
  <CardProduct product={product} onClick={onClick} {...rest} />
)

Default.args = {
  onClick: () => true,
  product: {
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
}
