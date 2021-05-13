import { AppProvider } from 'contexts'
import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Pet Friends Acessories</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="shortcut icon" href="/img/logo.png" />
        <link rel="apple-touch-icon" href="/img/logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="description"
          content="Este é um projeto inicial de um e-commerce"
        />
      </Head>
      <GlobalStyles />
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </>
  )
}

export default App
