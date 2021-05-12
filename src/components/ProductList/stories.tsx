import { Story, Meta } from '@storybook/react'

import { ProductList } from '.'

export default {
  title: 'ProductList',
  component: ProductList
} as Meta

export const Default: Story = args => <ProductList {...args} />
