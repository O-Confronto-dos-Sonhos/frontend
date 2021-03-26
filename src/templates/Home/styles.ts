import styled from 'styled-components'

import { theme } from 'styles'

export const Container = styled.main`
  color: ${theme.colors.darkGray};
  padding: ${theme.spacings.large};
`

export const Header = styled.header`
  padding-bottom: ${theme.spacings.xxlarge};
  text-align: center;
`

export const Title = styled.h1`
  font-size: 3.2rem;
`

export const Description = styled.h2`
  font-size: ${theme.font.sizes.xlarge};
  font-weight: 300;
`

export const Content = styled.section`
  max-width: 60rem;
  margin: 0 auto;
`

export const PostItem = styled.div`
  padding: ${theme.spacings.xlarge} 0;

  & + div {
    border-top: 0.1rem solid ${theme.colors.darkGray};
  }

  h2 {
    font-weight: 400;
    font-size: ${theme.font.sizes.xxlarge};
    margin-bottom: ${theme.spacings.xsmall};
  }

  > span {
    display: inline-block;
    font-size: ${theme.font.sizes.small};
    margin-top: ${theme.spacings.xsmall};
  }
`
