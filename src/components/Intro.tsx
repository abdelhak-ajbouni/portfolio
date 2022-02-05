import Container from "src/components/layout/Container"

export default function Intro({ }: Props) {
  return (
    <div className="intro">
      <Container className="justify-between px-4 py-2 my-8">
        <p className="text-5xl text-red-500 font-bold">Hi!</p>
        <h1 className="text-7xl text-red-500 font-bold">I'm Abdelhak Ajbouni</h1>
        <p className="text-xl text-gray-500">
          I'm a fullstack developer based in Tunis, Tunisia.
        </p>
      </Container>
    </div >
  );
}

type Props = {}