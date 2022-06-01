import Head from 'next/head'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" />
    </Head>
    
    <Component {...pageProps} />
  </>
}

export default MyApp
