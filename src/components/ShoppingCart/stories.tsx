import { Story, Meta } from '@storybook/react/types-6-0'
import { ShoppingCart } from '.'

export default {
  title: 'ShoppingCart',
  component: ShoppingCart
} as Meta

export const Default: Story = args => <ShoppingCart {...args} />
