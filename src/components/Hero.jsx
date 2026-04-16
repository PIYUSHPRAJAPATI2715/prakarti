import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export default function Hero() {
  const heroRef = useRef(null)
  const lightRef = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.5 })
    
    tl.from('.hero-line-inner', {
      y: '100%',
      stagger: 0.15,
      duration: 1.2,
      ease: 'power3.out'
    })
    .from('.hero-profile-wrap', {
      scale: 0.8,
      opacity: 0,
      duration: 1,
      ease: 'back.out(1.7)'
    }, '-=0.8')
    .from('.hero-descr-inner', {
      y: 20,
      opacity: 0,
      duration: 0.8
    }, '-=0.5')

    // Sunlight tracking with multi-layered effect
    gsap.set(lightRef.current, { 
      xPercent: -50, 
      yPercent: -50,
      x: window.innerWidth / 2,
      y: window.innerHeight / 2
    })
    
    const xTo = gsap.quickTo(lightRef.current, "x", { duration: 1.5, ease: "power2.out" })
    const yTo = gsap.quickTo(lightRef.current, "y", { duration: 1.5, ease: "power2.out" })

    const handleMouseMove = (e) => {
      const rect = heroRef.current.getBoundingClientRect()
      xTo(e.clientX - rect.left)
      yTo(e.clientY - rect.top)
    }

    const heroSection = heroRef.current
    heroSection.addEventListener('mousemove', handleMouseMove)
    
    return () => heroSection.removeEventListener('mousemove', handleMouseMove)
  }, { scope: heroRef })

  return (
    <section id="home" className="hero-section" ref={heroRef}>
      <div className="hero-light" ref={lightRef}></div>
      
      <div className="hero-profile-wrap" style={{ position: 'relative', zIndex: 2 }}>
        <div className="hero-profile">
          <img src="/p.png" alt="Prakrati" />
        </div>
      </div>
      
      <h1 className="hero-title" style={{ position: 'relative', zIndex: 2 }}>
        <div className="hero-line"><span className="hero-line-inner">Hi, I'm Prakrati</span></div>
        <div className="hero-line"><span className="hero-line-inner">UX UI Designer</span></div>
      </h1>
      
      <div className="hero-descr" style={{ margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <div className="hero-descr-inner">
          Turning complex problems into intuitive,<br />user-centered experiences
        </div>
      </div>
    </section>
  )
}
