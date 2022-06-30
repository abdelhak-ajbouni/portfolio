import React from 'react'
import Marquee from "react-fast-marquee";

export default function MarqueeSlider(props: Props) {

  return (
    <Marquee gradient={true} {...props}>
      {
        props.items.map((item: React.ReactNode, index: number) => {
          return <div key={index} className="my-2 mx-10">{item}</div>
        })
      }
    </Marquee>
  )
}

type Props = {
  items: React.ReactNode[]
  direction?: "left" | "right"
  speed?: number
}