import { render } from '@testing-library/react'
import { Search } from '.'

describe('<Search />', () => {
  it('should render', async () => {
    const { findByPlaceholderText } = render(<Search />)

    expect(
      await findByPlaceholderText(/O que você procura?/i)
    ).toBeInTheDocument()
  })
})
