import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Connections({ }: Props) {
  return (
    <div className="connections">
      <div className="flex">
        <a href="https://www.linkedin.com/in/abdelhak-ajbouni-8a9b21151/" target="_blank" rel="noreferrer">
          <FaLinkedin className="text-3xl text-gray-500 my-2 mx-1 cursor-pointer" />
        </a>
        <a href="https://github.com/abdelhak-ajbouni" target="_blank" rel="noreferrer">
          <FaGithub className="text-3xl text-gray-500 my-2 mx-1 cursor-pointer" />
        </a>
      </div>
    </div >
  );
}

type Props = {}