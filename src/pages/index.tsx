import Head from 'next/head'
import { initializeApollo } from 'services/apollo'
import { QUERY_HOME } from 'graphql/queries/home'

import { Home, HomeTemplateProps } from 'templates/Home'

type IndexProps = HomeTemplateProps

export default function Index(props: IndexProps) {
  return (
    <>
      <Head>
        <title>
          {props.page.title} | {props.allSettings.title}
        </title>
      </Head>

      <Home {...props} />
    </>
  )
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
