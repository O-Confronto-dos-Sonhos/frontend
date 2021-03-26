import { initializeApollo } from 'services/apollo'

import { Home, HomeTemplateProps } from 'templates/Home'

import { QUERY_HOME } from 'graphql/queries/home'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query({
    query: QUERY_HOME,
  })

  return {
    props: {
      allSettings: data.allSettings,
      page: data.page,
      posts: data.posts.nodes,
    },
  }
}
