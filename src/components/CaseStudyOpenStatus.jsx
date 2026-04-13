import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { X } from 'lucide-react'

const CloseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>

export default function CaseStudyOpenStatus({ onBack }) {
  const container = useRef(null)

  useGSAP(() => {
    // Reveal animation for sections
    const sections = gsap.utils.toArray('.cs-section')
    sections.forEach((sec) => {
      gsap.from(sec, {
        scrollTrigger: {
          trigger: sec,
          start: 'top 85%',
        },
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: 'expo.out'
      })
    })

    // Fade in intro
    gsap.from('.cs-header', {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out'
    })
  }, { scope: container })

  return (
    <div className="casestudy-page" ref={container}>
      <div className="cs-nav">
        <button onClick={onBack} className="cs-back-btn">
          <CloseIcon />
        </button>
      </div>

      <div className="cs-content">
        {/* Intro Section - Using open1.png */}
        <div className="cs-header">
          <div className="cs-brand">
            <img src="/open.png" alt="" style={{ height: '80px' }} />
            <span></span>
          </div>
          <h1 className="cs-title">Transforming a Complex Onboarding Flow into a Seamless Journey</h1>
          <div className="cs-meta">
            <div className="cs-meta-item">
              <h3>My Role</h3>
              <p>UX UI Design, User Research Prototyping, Usability Testing</p>
            </div>
            <div className="cs-meta-item">
              <h3>Team</h3>
              <p>2 UX UI Designers, 1 Project Manager and 3 App Developers</p>
            </div>
            <div className="cs-meta-item">
              <h3>Project Timeline</h3>
              <p>Sep 2025 - Nov 2025</p>
            </div>
          </div>
        </div>

        {/* Section 1: Hero Story (open1) */}
        <section className="cs-section">
          <img src="/open1.png" alt="OpenStatus Story" className="cs-img-full" />
        </section>

        {/* Section 2: The Challenge (open2) */}
        <section className="cs-section">
          <img src="/open2.png" alt="The Challenge" className="cs-img-full" />
        </section>

        {/* Section 3: Research & Sticky Notes (open3) */}
        <section className="cs-section">
          <img src="/open3.png" alt="Research" className="cs-img-full" />
        </section>

        {/* Section 4: Experiments (open4) */}
        <section className="cs-section">
          <img src="/open4.png" alt="Experiments" className="cs-img-full" />
        </section>

        {/* Section 5: User Flow (open5) */}
        <section className="cs-section">
          <img src="/open5.png" alt="User Flow" className="cs-img-full" />
        </section>

        {/* Section 6: Outcome & Impact (open6) */}
        <section className="cs-section">
          <img src="/open6.png" alt="Outcome" className="cs-img-full" />
        </section>

        {/* Conclusion Card */}
        <section className="cs-section cs-conclusion cs-reveal">
          <p>
            This project helped me understand how to think from the user's perspective—focusing on what information is truly necessary during the interaction with the product. Most importantly, it reinforced how thoughtful design decisions, can make the user journey more intuitive.
          </p>
        </section>

        <div className="cs-footer">
          <button onClick={onBack} className="cs-btn-primary">Back to Home</button>
        </div>
      </div>
    </div>
  )
}
