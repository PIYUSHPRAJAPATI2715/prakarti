import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const CloseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>

export default function CaseStudyOpenStatus({ onBack }) {
  const container = useRef(null)

  useGSAP(() => {
    // Reveal animation for sections
    const sections = gsap.utils.toArray('.cs-section, .cs-dashed-section')
    sections.forEach((sec) => {
      gsap.from(sec, {
        scrollTrigger: {
          trigger: sec,
          start: 'top 85%',
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power2.out'
      })
    })

    // Fade in intro
    gsap.from('.cs-header-inner', {
      opacity: 0,
      y: 30,
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
        {/* Header Section */}
        <div className="cs-header">
          <div className="cs-header-inner">
            <div className="cs-brand openstatus">
              <img src="/open.png" alt="OpenStatus logo" style={{ height: '70px', marginBottom: '1rem' }} />
            </div>
            <h1 className="cs-title">Transforming a Complex Onboarding Flow into a Seamless Journey</h1>
            <p className="cs-author">— PRAKRATI JANGID</p>

            <div className="cs-meta-cards">
              <div className="cs-meta-card">
                <h3>My Role</h3>
                <p>UX UI Design, User Research Prototyping, Usability Testing</p>
              </div>
              <div className="cs-meta-card">
                <h3>Team</h3>
                <p>2 UX UI Designers, 1 Project Manager and 3 App Developers</p>
              </div>
              <div className="cs-meta-card">
                <h3>Project Timeline</h3>
                <p>Sep 2025 - Nov 2025</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 1: Overview Banner */}
        <section className="cs-dashed-section">
          <img src="/open1.png" alt="OpenStatus Overview" className="cs-img-full cs-full-breakout" />
        </section>

        {/* Section 2: The Challenge */}
        <section className="cs-section">
          <div className="cs-text-content">
            <h2 className="cs-sec-title">The Challenge</h2>
            <p className="cs-sec-desc">
              The current onboarding experience faces critical usability hurdles that impede user activation and long-term engagement. Most notably, the multi-role entry selection (Individual vs. Business Owner) introduces immediate friction, causing significant drop-offs before users reach the core product value.
            </p>
          </div>
        </section>

        {/* Section 3: Research And Analysis */}
        <section className="cs-dashed-section">
          <div className="cs-text-content">
            <h2 className="cs-sec-title">Research And Analysis</h2>
            <p className="cs-sec-desc">
              To explore effective solutions for this problem, I conducted pattern research using Mobbin and Appshots. During this exploration, I looked at products like Airbnb, Uber, and Duolingo uses simplified profile setup approach that minimizes unnecessary inputs and focuses only on essential information.
            </p>
          </div>

          <div className="cs-sticky-notes-container">
            <img src="/open2.png" alt="Sticky Notes" className="cs-img-full" style={{ boxShadow: 'none', borderRadius: '0' }} />
          </div>
        </section>

        {/* Section 4: Design Execution */}
        <section className="cs-dashed-section">
          <div className="cs-text-content">
            <h2 className="cs-sec-title">Design Execution</h2>
            <p className="cs-sec-desc">
              Following thorough research, we have identified key solutions; let's break them down step-by-step as we proceed.
            </p>
          </div>

          <div className="cs-experiment-container">
            <img src="/open3.png" alt="Experiment No. 1" className="cs-img-full" style={{ boxShadow: 'none' }} />
          </div>

          <div className="cs-experiment-container" style={{ marginTop: '4rem' }}>
            <img src="/open4.png" alt="Experiment No. 2" className="cs-img-full" style={{ boxShadow: 'none' }} />
          </div>

          <div className="cs-experiment-container" style={{ marginTop: '4rem' }}>
            <img src="/open5.png" alt="Experiment No. 3" className="cs-img-full" style={{ boxShadow: 'none' }} />
          </div>
        </section>

        {/* Section 5: User Flow */}
        <section className="cs-dashed-section">
          <div className="cs-text-content">
            <h2 className="cs-sec-title">User Flow</h2>
            <p className="cs-sec-desc">
              Now lets put all these together, and let me guide you through the Onboarding Flow of the app.
            </p>
          </div>
          <img src="/open6.png" alt="User Flow" className="cs-img-full" />
        </section>

        {/* Section 7: Usability Testing */}
        <section className="cs-dashed-section">
          <div className="cs-text-content">
            <h2 className="cs-sec-title">Usability testing</h2>
            <p className="cs-sec-desc">
              To evaluate the effectiveness of the redesigned onboarding flow, we conducted usability testing with a few colleagues who interacted with the prototype.
            </p>
            <p className="cs-sec-desc">
              The objective was to understand how clearly users could follow the onboarding steps and how easily they could complete the profile setup.
            </p>
          </div>
        </section>

        {/* Section 8: Impact & Final Outcome */}
        <section className="cs-dashed-section">
          <div className="cs-text-content">
            <h2 className="cs-sec-title">Impact & Final Outcome</h2>
            <p className="cs-sec-desc">
              After addressing the usability issues we faced earlier, the onboarding process became more streamlined, reducing unnecessary inputs and improving clarity. Users were able to complete the onboarding flow faster and with fewer questions.
            </p>
          </div>

          {/* Final Quote/Impact Box */}
          <div className="cs-impact-box" style={{ marginTop: '6rem' }}>
            <p>
              This project helped me understand how to think from the user's perspective—focusing on what information is truly necessary during the interaction with the product. Most importantly, it reinforced how thoughtful design decisions, can make the user journey more intuitive.
            </p>
          </div>
        </section>

        <div className="cs-footer">
          <button onClick={onBack} className="cs-btn-primary">Back to Home</button>
        </div>
      </div>
    </div>
  )
}
