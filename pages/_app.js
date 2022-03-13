import { useEffect } from 'react'

import '../styles/globals.css'
import '../styles/scss/custom.scss' //bootstrap


function MyApp({ Component, pageProps }) {

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap")
  })

  return <Component {...pageProps} />
}

export default MyApp
