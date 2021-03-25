import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import { Home } from '.'

describe('<Home />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Home />)

    expect(
      screen.getByRole('heading', { name: /nextjs boilerplate/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    const { container } = renderWithTheme(<Home />)

    expect(container.firstChild).toHaveStyleRule('background-color', '#051330')
  })
})
