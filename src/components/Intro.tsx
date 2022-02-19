import Link from 'next/link'
// import Image from 'next/image'

import Button from "src/components/common/Button"
import Connections from "src/components/Connections";

// import reactPNG from "public/images/react.png"

export default function Intro({ }: Props) {
  return (
    <div className="intro mb-32 flex justify-between">
      <div>
        <p className="text-5xl text-red-500 font-bold">Hi! 👋 I&apos;m</p>
        <h1 className="text-8xl text-red-500 font-bold">Abdelhak Ajbouni</h1>
        <p className="text-xl text-gray-500">
          I&apos;m a <b>fullstack developer</b> based in Tunis, Tunisia.
        </p>
        <p className="text-xl text-gray-500">
          I mostly use Javascript but I&apos;m always ready to learn new technologies and improve my skills.
        </p>
        <Connections />
        <Link href="/#contact" passHref><Button className='my-6' label="Lets connect &#128640;" /></Link>
      </div>
      {/* <div>
        <Image className="rounded-xl" src={coding} alt="coding" width={600} height={400} />
      </div> */}
    </div >
  );
}

type Props = {}