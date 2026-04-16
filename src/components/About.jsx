import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export default function About() {
  const aboutRef = useRef(null)

  useGSAP(() => {
    gsap.from('.about-reveal', {
      scrollTrigger: { 
        trigger: aboutRef.current, 
        start: 'top 80%' 
      },
      y: 50,
      opacity: 0,
      duration: 1.2,
      stagger: 0.15,
      ease: 'expo.out'
    })
  }, { scope: aboutRef })

  return (
    <section id="about" className="about-section">
      <div className="about-wrap" ref={aboutRef}>
        <div className="about-header about-reveal">
          <h2 className="about-title">About Me</h2>
        </div>
        
        <div className="about-text">
          <p className="about-reveal">
            I'm Prakrati Jangid, a UX UI Designer from Jaipur. I design digital experiences that turn confusion into clarity.
          </p>
          <p className="about-reveal">
            With 1.5 years of experience in design, I've worked on building and improving user flows across web and mobile. I focus on usability, clean interfaces, and making sure every design decision has a purpose.
          </p>
          <p className="about-reveal">
            I like going deep into problems, iterating fast, and using AI tools to explore better solutions—without losing sight of the user.
          </p>
        </div>

        </div>
    </section>
  )
}
