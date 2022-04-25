import type { AppProps } from 'next/app'
import { Toaster }       from 'react-hot-toast'
import { Layout }        from '../components'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps){
  return (
    <Layout>
      <Toaster />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
