import type { NextPage } from 'next'
import Head from 'next/head'

import Container from "src/components/layout/Container"
import Intro from 'src/components/Intro'
import About from 'src/components/About'
import Contact from 'src/components/Contact'
import Skills from 'src/components/Skills'

const Home: NextPage = () => {
  return (
    <div className="index-page">
      <Head>
        <title>Abdelhak Ajbouni portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="h-[calc(100vh-10rem)] flex flex-col justify-center">
        <Container className="px-4 py-2">
          <Intro />
        </Container>
      </header>

      <div className="bg-white">
        <Container className="px-4 py-16">
          <About />
          <Skills />
        </Container>
      </div>

      <div>
        <Container>
         
        </Container>
      </div>

      <div>
        <Container className="px-4 py-16">
          <Contact />
        </Container>
      </div>

    </div>
  )
}

export default Home