import React from 'react'
import Image from 'next/image'

import Marquee from 'src/components/common/Marquee'

export default function Skills({ }: Props) {

  const itemsLeft = [
    <Image key={1} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="80" height="80" />,
    <Image key={2} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="80" height="80" />,
    <Image key={3} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="80" height="80" />,
    <Image key={4} src="https://camo.githubusercontent.com/5734d0669fe22ce04a1cb989a156cd32c379875f6bca56d5210c9432824856d9/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f7461696c77696e646373732f7461696c77696e646373732d69636f6e2e737667" alt="tailwind" width="80" height="80" data-canonical-src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" />,
    <Image key={5} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="80" height="80" />,
    <Image key={6} src="https://camo.githubusercontent.com/3aa42ee93eafa8f736bac662e8ca536350dad790ba36f2f0cb1783aa2be42f6d/68747470733a2f2f63646e2e776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f6e6578746a732d322e737667" alt="nextjs" width="80" height="80" data-canonical-src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" />,
    <Image key={7} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="80" height="80" />,
    <Image key={8} src="https://camo.githubusercontent.com/ce0a32825268b09cd5e0fc7c2a09c587a708491427cb794cade8f1866f7284c6/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6a6573746a73696f2f6a6573746a73696f2d69636f6e2e737667" alt="jest" width="80" height="80" data-canonical-src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg" />,
    <Image key={9} src="https://www.vectorlogo.zone/logos/grpcio/grpcio-ar21.svg" alt="grpc" width="80" height="80" />,
    <Image key={10} src="https://raw.githubusercontent.com/simple-icons/simple-icons/aceb38fcc05664777005813ab186920ff29ec614/icons/cypress.svg" alt="cypress" width="80" height="80" />
  ]
  const itemsRight = [
    <Image key={1} src="https://www.vectorlogo.zone/logos/gatsbyjs/gatsbyjs-icon.svg" alt="gatsby" width="80" height="80" />,
    <Image key={2} src="https://www.vectorlogo.zone/logos/apollographql/apollographql-ar21.svg" alt="apollo-graphql" width="80" height="80" />,
    <Image key={3} src="https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg" alt="graphql" width="80" height="80" />,
    <Image key={4} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="graphql" width="80" height="80" />,
    <Image key={5} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="80" height="80" />,
    <Image key={6} src=" https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="docker" width="80" height="80" />,
    <Image key={7} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="80" height="80" />,
    <Image key={8} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original-wordmark.svg" alt="redis" width="80" height="80" />,
    <Image key={9} src="https://www.vectorlogo.zone/logos/neo4j/neo4j-icon.svg" alt="neo4j" width="80" height="80" />,
    <Image key={10} src="https://raw.githubusercontent.com/vscode-icons/vscode-icons/c6a88d017a90b71a98ec62fe829d7e93ec86b46a/icons/file_type_swagger.svg" alt="swagger" width="80" height="80" />
  ]

  return (
    <div>
      <h2 className="text-5xl text-gray-500 font-bold text-center my-10 pt-10 border-t">Technologies I use</h2>
      <Marquee items={itemsLeft} direction="left" />
      <Marquee items={itemsRight} direction="right" speed={30} />
    </div>
  )
}

type Props = {}