import { addDecorator } from '@storybook/react'
import { withNextRouter } from 'storybook-addon-next-router'
import GlobalStyles from '../src/styles/global'
import { AppProvider } from '../src/contexts'

addDecorator(withNextRouter())

export const decorators = [
  Story => (
    <AppProvider>
      <GlobalStyles />
      <Story />
    </AppProvider>
  )
]
