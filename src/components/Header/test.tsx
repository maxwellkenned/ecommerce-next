import { render } from '@testing-library/react'
import { AppProvider } from 'contexts'
import { Header } from '.'

describe('<Header />', () => {
  it('should render', () => {
    const { getByText } = render(
      <AppProvider>
        <Header />
      </AppProvider>
    )

    expect(getByText(/Pet Friends Acessories/i)).toBeInTheDocument()
  })
})
