import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export default function Hero() {
  const heroRef = useRef(null)
  const lightRef = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.5 })
    
    tl.from('.hero-anim', {
      y: 100,
      opacity: 0,
      stagger: 0.1,
      duration: 1.5,
      ease: 'expo.out'
    })

    // Sunlight tracking logic
    gsap.set(lightRef.current, { xPercent: -50, yPercent: -50 })
    const xTo = gsap.quickTo(lightRef.current, "x", { duration: 0.8, ease: "power3" })
    const yTo = gsap.quickTo(lightRef.current, "y", { duration: 0.8, ease: "power3" })

    const handleMouseMove = (e) => {
      const rect = heroRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      xTo(x)
      yTo(y)
    }

    const heroSection = heroRef.current
    heroSection.addEventListener('mousemove', handleMouseMove)
    
    return () => heroSection.removeEventListener('mousemove', handleMouseMove)
  }, { scope: heroRef })

  return (
    <section id="home" className="hero-section" ref={heroRef}>
      <div className="hero-light" ref={lightRef}></div>
      
      <div className="hero-profile hero-anim" style={{ position: 'relative', zIndex: 2 }}>
        <img src="/p.png" alt="Prakrati" />
      </div>
      
      <h1 className="hero-title" style={{ position: 'relative', zIndex: 2 }}>
        <div className="hero-anim">Hi, I'm Prakrati</div>
        <div className="hero-anim">UX UI Designer</div>
      </h1>
      
      <p className="hero-descr hero-anim" style={{ margin: '0 auto', position: 'relative', zIndex: 2 }}>
        Turning complex problems into intuitive,<br />user-centered experiences
      </p>
    </section>
  )
}
