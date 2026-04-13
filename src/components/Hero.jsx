import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export default function Hero() {
  const heroRef = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.5 })
    
    tl.from('.hero-anim', {
      y: 100,
      opacity: 0,
      stagger: 0.1,
      duration: 1.5,
      ease: 'expo.out'
    })
  }, { scope: heroRef })

  return (
    <section id="home" className="hero-section" ref={heroRef}>
      <div className="hero-profile hero-anim">
        <img src="/p.png" alt="Prakrati" />
      </div>
      
      <h1 className="hero-title">
        <div className="hero-anim">Hi, I'm Prakrati</div>
        <div className="hero-anim">UX UI Designer</div>
      </h1>
      
      <p className="hero-descr hero-anim" style={{ margin: '0 auto' }}>
        Turning complex problems into intuitive,<br />user-centered experiences
      </p>
    </section>
  )
}
