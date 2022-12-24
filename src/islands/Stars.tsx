import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import type * as three from 'three'
import { getRandomFloat } from 'src/utils/functions'

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Stars />
    </Canvas>
  )
}

function Stars(props: any) {
  const ref = useRef<three.Mesh>(null!)
  const dots = new Float32Array(1000).map(() => getRandomFloat(-1, 1, 8))

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 40
    ref.current.rotation.y -= delta / 60
  })

  return (
    <group rotation={[0, 0, -1]}>
      <Points ref={ref} positions={dots} stride={3} frustumCulled={false} {...props}>
        <PointMaterial transparent color="#ffa0e0" size={0.005} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  )
}
