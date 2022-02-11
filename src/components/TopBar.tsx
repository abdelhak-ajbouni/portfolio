import Link from 'next/link'
import Image from "next/image"

import Container from "src/components/layout/Container"
import Button from "src/components/common/Button"

import logo from "public/images/vercel.svg";

export default function TopBar({ }: Props) {
  return (
    <div className="top-bar">
      <Container className="flex justify-end px-4 py-8">
        <Link href="/#about" passHref><Button className='mx-1' label="About" secondary /></Link>
        <Link href="/#experience" passHref><Button className='mx-1' label="Experience" secondary /></Link>
        <Link href="/#projects" passHref><Button className='mx-1' label="Projects" secondary /></Link>
        <Link href="/#contact" passHref><Button className='mx-1' label="Contact" secondary /></Link>
        <Link href="/resume" passHref><Button className='ml-4' label="Resume" /></Link>
      </Container>
    </div >
  );
}

type Props = {}