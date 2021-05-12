import { Story, Meta } from '@storybook/react'
import { ModalProduct } from '.'

export default {
  title: 'ModalProduct',
  component: ModalProduct
} as Meta

export const Default: Story = ({ product, isOpen, toggle, ...rest }) => (
  <ModalProduct product={product} isOpen={isOpen} toggle={toggle} {...rest} />
)

Default.args = {
  isOpen: true,
  toggle: () => false,
  product: {
    id: 1,
    name: 'Areia Sanitária Chalesco Cristais de Sílica',
    promo: true,
    image: '/img/logo.png',
    price: '28,71',
    oldPrice: '31,90',
    percent: '10',
    category: 'Caixa de areia e limpeza'
  }
}
