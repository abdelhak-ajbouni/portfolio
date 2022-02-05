import Link from 'next/link'
import Image from "next/image"

import Container from "src/components/layout/Container"

import logo from "public/images/vercel.svg";

export default function TopBar({ }: Props) {
  return (
    <div className="top-bar">
      <Container className="justify-between px-4 py-2">
        <div className="top-bar-wrapper flex justify-between">
        </div>
      </Container>
    </div >
  );
}

type Props = {}