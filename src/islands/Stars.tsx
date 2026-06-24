import { Suspense, lazy } from 'react'

// Deterministic positions for hydration-safe fallback
const fallbackStars = Array.from({ length: 50 }, (_, i) => ({
  left: `${(i * 37 + 13) % 100}%`,
  top: `${(i * 73 + 7) % 100}%`,
  delay: `${(i % 10) * 0.2}s`,
}))

function StarsLoading() {
  return (
    <div className="absolute inset-0 bg-gradient-to-t from-slate-700 via-slate-800 to-slate-800">
      <div className="absolute inset-0 opacity-20">
        <div className="animate-pulse">
          {fallbackStars.map((star, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-pink-300 rounded-full"
              style={{
                left: star.left,
                top: star.top,
                animationDelay: star.delay,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

// Dynamically import the Three.js scene
const ThreeScene = lazy(() => import('./ThreeScene'))

export default function Scene() {
  return (
    <Suspense fallback={<StarsLoading />}>
      <ThreeScene />
    </Suspense>
  )
}
