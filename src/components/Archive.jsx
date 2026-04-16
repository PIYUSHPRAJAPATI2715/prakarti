import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export default function Archive() {
  const archiveRef = useRef(null)

  useGSAP(() => {
    gsap.from('.archive-header-reveal', {
      scrollTrigger: {
        trigger: archiveRef.current,
        start: 'top 80%',
      },
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: 'power3.out'
    })

    gsap.from('.archive-img-reveal', {
      scrollTrigger: {
        trigger: '.archive-img-reveal',
        start: 'top 80%',
      },
      y: 50,
      opacity: 0,
      duration: 1.5,
      ease: 'expo.out'
    })
  }, { scope: archiveRef })

  return (
    <section id="archive" className="archive-section">
      <div className="section-wrapper" ref={archiveRef}>
        <div className="section-header archive-header-reveal">
          <h2 className="section-title">Archive</h2>
          <p className="section-subtitle">Snapshots of some of my designs.</p>
        </div>
        
        <div className="archive-content">
          <div className="archive-full-visual archive-img-reveal">
            <img src="/archive.png" alt="Archive Designs" className="archive-full-img" />
          </div>
        </div>
      </div>
    </section>
  )
}
