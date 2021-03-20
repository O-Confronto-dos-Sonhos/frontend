import Head from 'next/head'
import { AppProps } from 'next/app'

import { ApolloProvider } from '@apollo/client'
import { useApollo } from 'services/apollo'

import { ThemeProvider } from 'styled-components'
import { GlobalStyles, theme } from 'styles'

function App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Head>
          <title>O Confronto dos Sonhos</title>
          <link rel="shortcut" href="/assets/icon-512.png" />
          <link rel="apple-touch-icon" href="/assets/icon-512.png" />
          <link rel="manifest" href="/manifest.json" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap"
          />
          <meta name="description" content="Um site sobre poesias" />
        </Head>

        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default App
