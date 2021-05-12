import { Story, Meta } from '@storybook/react/types-6-0'
import { CategoryList } from '.'

export default {
  title: 'CategoryList',
  component: CategoryList
} as Meta

export const Default: Story = ({ categories, ...rest }) => (
  <CategoryList categories={categories} {...rest} />
)

Default.args = {
  categories: [
    'Caixa de areia e limpeza',
    'Caminhas e Outros',
    'Brinquedos',
    'Coleiras',
    'Ossos e Petiscos'
  ]
}
