import Head from 'next/head'
import { initializeApollo } from 'services/apollo'
import { QUERY_HOME } from 'graphql/queries/home'

import { Main } from 'components'
import { MainProps } from 'components/Main'

type HomeProps = {
  page: MainProps
}

export default function Home({ page }: HomeProps) {
  return (
    <>
      <Head>
        <title>{page.title} | O Confronto dos Sonhos</title>
      </Head>

      <Main {...page} />
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
      page: data.page,
    },
  }
}
