import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export default function Preloader({ onComplete }) {
  const [counter, setCounter] = useState(0)
  const preloaderRef = useRef(null)

  useEffect(() => {
    const data = { val: 0 }
    gsap.to(data, {
      val: 100,
      duration: 2.5,
      ease: 'power2.inOut',
      onUpdate: () => setCounter(Math.floor(data.val)),
      onComplete: () => {
        const tl = gsap.timeline({
          onComplete: onComplete
        })
        
        tl.to('.preloader-content', {
          opacity: 0,
          y: -40,
          duration: 0.8,
          ease: 'power4.in'
        })
        .to(preloaderRef.current, {
          yPercent: -100,
          duration: 1.2,
          ease: 'power4.inOut'
        })
      }
    })
  }, [onComplete])

  return (
    <div className="preloader" ref={preloaderRef}>
      <div className="preloader-content">
        <h2 className="preloader-title">PRAKRATI JANGID</h2>
        <div className="preloader-bar-wrap">
          <div className="preloader-bar" style={{ transform: `scaleX(${counter / 100})` }}></div>
        </div>
        <div className="preloader-percent">{counter}%</div>
      </div>
    </div>
  )
}
