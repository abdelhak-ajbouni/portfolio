import { Suspense, lazy } from 'react'

// Loading fallback component
function StarsLoading() {
  return (
    <div className="absolute inset-0 bg-gradient-to-t from-slate-700 via-slate-800 to-slate-800">
      <div className="absolute inset-0 opacity-20">
        {/* Simple CSS stars fallback */}
        <div className="animate-pulse">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-pink-300 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
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
