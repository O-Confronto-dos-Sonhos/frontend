import { gql } from '@apollo/client'

export const QUERY_HOME = gql`
  query QueryHome {
    page(id: "home", idType: URI) {
      title
      content
    }
  }
`
