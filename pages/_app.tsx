import type { AppProps } from 'next/app'
import { SessionProvider, useSession } from 'next-auth/react'
// import '../style/style.css'
// import '../style/bootstrap.min.css'
import '../style/bootstrap.css'



function MyApp({ Component, pageProps }: AppProps) {

  return <SessionProvider session={pageProps.session} >
      <Component {...pageProps} />
  </SessionProvider>  
}

export default MyApp