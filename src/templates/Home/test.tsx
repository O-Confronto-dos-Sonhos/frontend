import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import { Home } from '.'

import mock from './mock'

describe('<Home />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Home {...mock} />)

    expect(
      screen.getByRole('heading', { name: /lorem ipsum/i })
    ).toBeInTheDocument()
  })
})
