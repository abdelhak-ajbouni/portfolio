import type { AppProps } from 'next/app'

import TopBar from "src/components/TopBar"

import 'styles/globals.css'

function MyApp({
  Component,
  pageProps
}: AppProps) {
  return (
    <div className='app'>
      <TopBar />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
