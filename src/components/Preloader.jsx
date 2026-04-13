import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export default function Preloader({ onComplete }) {
  const [counter, setCounter] = useState(0)
  const preloaderRef = useRef(null)
  const percentRef = useRef(null)
  const barRef = useRef(null)

  useEffect(() => {
    let count = 0
    const interval = setInterval(() => {
      count += Math.floor(Math.random() * 10) + 1
      if (count >= 100) {
        count = 100
        clearInterval(interval)
        setTimeout(() => {
          gsap.timeline({
            onComplete: () => {
              onComplete()
            }
          })
          .to(percentRef.current, { y: -50, opacity: 0, duration: 0.5, ease: 'power2.in' })
          .to(barRef.current, { scaleX: 0, duration: 0.5, ease: 'power2.in' }, '<')
          .to(preloaderRef.current, { 
            scaleY: 0, 
            transformOrigin: 'top', 
            duration: 1, 
            ease: 'expo.inOut' 
          })
        }, 500)
      }
      setCounter(count)
    }, 50)

    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <div className="preloader" ref={preloaderRef}>
      <div className="preloader-content">
        <div className="preloader-title" style={{ fontFamily: 'Syne', fontWeight: 800 }}>PRAKRATI.</div>
        <div className="preloader-bar-wrap">
          <div className="preloader-bar" ref={barRef} style={{ scaleX: counter / 100 }}></div>
        </div>
        <div className="preloader-percent" ref={percentRef}>{counter}%</div>
      </div>
    </div>
  )
}
