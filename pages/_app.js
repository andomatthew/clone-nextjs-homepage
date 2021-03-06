import { useEffect } from 'react'

import Layout from '../components/layout/layout'

import '../styles/scss/custom.scss' //bootstrap
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap")
  })

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
