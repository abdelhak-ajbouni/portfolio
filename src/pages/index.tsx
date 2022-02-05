import type { NextPage } from 'next'
import Head from 'next/head'

import Intro from 'src/components/Intro'

const Home: NextPage = () => {
  return (
    <div className="index-page">
      <Head>
        <title>Abdelhak Ajbouni portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Intro />
    </div>
  )
}

export default Home