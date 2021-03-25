import { gql } from '@apollo/client'

export const QUERY_HOME = gql`
  query QueryHome {
    allSettings {
      title: generalSettingsTitle
    }
    page(id: "home", idType: URI) {
      title
      content
    }
    posts(first: 10) {
      nodes {
        id
        slug
        title
        date
        excerpt
      }
    }
  }
`
