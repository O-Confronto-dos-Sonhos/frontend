import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client'
import { useMemo } from 'react'

export const WP_URL = process.env.WORDPRESS_URL
export const WP_USER = process.env.WORDPRESS_USER
export const WP_PASS = process.env.WORDPRESS_PASS

export const WP_AUTH = Buffer.from(`${WP_USER}:${WP_PASS}`).toString()

let apolloClient: ApolloClient<NormalizedCacheObject>

export function initializeApollo(initialState = {}) {
  const globalApolloClient = apolloClient ?? createApolloClient()

  if (initialState) {
    globalApolloClient.cache.restore(initialState)
  }

  if (typeof window === 'undefined') {
    return globalApolloClient
  }

  apolloClient = apolloClient ?? globalApolloClient

  return apolloClient
}

function createApolloClient() {
  return new ApolloClient({
    cache: new InMemoryCache(),
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({ uri: `${WP_URL}/graphql` }),
    headers: {
      authorization: WP_AUTH ? `Basic ${WP_AUTH}` : '',
    },
  })
}

export function useApollo(initialState = {}) {
  const store = useMemo(() => initializeApollo(initialState), [initialState])

  return store
}
