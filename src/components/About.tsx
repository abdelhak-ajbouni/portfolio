import Image from "next/image"

import avatar from "public/images/avatar.jpeg"

export default function About({ }: Props) {
  return (
    <div id="about" className="flex">
      <div className="w-1/6">
        <Image className="rounded-full" src={avatar} alt="avatar" width={250} height={250} />
      </div>
      <div className="about-text w-5/6 mx-12 my-8">
        <h2 className="text-5xl text-red-500 font-bold mb-2">Who I am</h2>
        <p className="text-xl text-gray-500">
          I have ~ 4 years of experience working with Javascript, Recently I&apos;ve been using and enjoying the 
          {" "}<a href="https://twitter.com/benawad/status/1366076156374626305" className="underline decoration-dashed decoration-red-500">Hypebeast stack</a>{" "}
          with <span className="text-red-500">Nextjs</span> and <span className="text-red-500">Expressjs</span> but I&apos;m also comfortable with
          a variety of frameworks and libraries such as <span className="text-red-500">gRPC</span> and <span className="text-red-500">Keycloak</span>.
        </p>
        <p className="text-xl text-gray-500 mt-2">
          Being hardworking and result oriented, I always work towards achieving best result on each project I lay my hands on.
        </p>
      </div>
    </div >
  );
}

type Props = {}