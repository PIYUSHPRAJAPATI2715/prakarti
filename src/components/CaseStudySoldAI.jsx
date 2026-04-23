import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const CloseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>

export default function CaseStudySoldAI({ onBack }) {
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
            <div className="cs-brand soldai">
              <span>SOLD AI</span>
            </div>
            <h1 className="cs-title">Improving Search Experience for Better Product Discovery</h1>
            <p className="cs-author">— PRAKRATI JANGID</p>
            
            <div className="cs-meta-cards">
              <div className="cs-meta-card">
                <h3>My Role</h3>
                <p>UX UI Design, User Research Prototyping, Usability Testing</p>
              </div>
              <div className="cs-meta-card">
                <h3>Team</h3>
                <p>2 UX UI Designers, 1 Project Manager and 2 App Developers</p>
              </div>
              <div className="cs-meta-card">
                <h3>Project Timeline</h3>
                <p>Oct 2025 - Jan 2026</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 1: Overview Banner */}
        <section className="cs-dashed-section">
          <img src="/sold1.png" alt="SOLD AI Overview" className="cs-img-full cs-full-breakout" />
        </section>

        {/* Section 2: The Challenge */}
        <section className="cs-section">
          <div className="cs-text-content">
            <h2 className="cs-sec-title">The Challenge</h2>
            <p className="cs-sec-desc">
              While the existing search experience provided basic functionality, it lacked the efficiency and clarity needed for quick product discovery.
            </p>
            <ul className="cs-list">
              <li>Lack of personalized or recent search suggestions.</li>
              <li>Filters were not easily visible or accessible.</li>
              <li>No clear indication of applied filters.</li>
              <li>The search experience felt static and less intuitive.</li>
            </ul>
          </div>
        </section>

        {/* Section 3: Research And Analysis */}
        <section className="cs-dashed-section">
          <div className="cs-text-content">
            <h2 className="cs-sec-title">Research And Analysis</h2>
            <p className="cs-sec-desc">
              To understand the gaps in the current search experience, I analyzed user behavior patterns within product discovery flows, focusing on how users search, refine, and evaluate results. The goal was to identify where users face friction during exploration and what slows down decision-making.
            </p>
            <h4 className="cs-sub-label">KEY INSIGHTS</h4>
            <ul className="cs-list">
              <li>Users tend to scan rather than read, making visual hierarchy critical in product listings.</li>
              <li>When filters are not immediately visible, users often continue scrolling instead of refining results.</li>
              <li>Lack of feedback during search creates a feeling of uncertainty and inefficiency.</li>
              <li>Users rely on quick mental shortcuts (price, category, condition) to make decisions faster.</li>
            </ul>
          </div>
          
          <div className="cs-sticky-notes-container">
            <img src="/sold2.png" alt="Sticky Notes" className="cs-img-full" style={{ boxShadow: 'none', borderRadius: '0' }} />
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
            <img src="/sold3.png" alt="Experiment No. 1" className="cs-img-full" style={{ boxShadow: 'none' }} />
          </div>

          <div className="cs-experiment-container" style={{ marginTop: '4rem' }}>
            <img src="/sold4.png" alt="Experiment No. 2" className="cs-img-full" style={{ boxShadow: 'none' }} />
          </div>
        </section>

        {/* Section 5: Components */}
        <section className="cs-section">
          <div className="cs-text-content">
            <h2 className="cs-sec-title">Components</h2>
            <p className="cs-sec-desc">
              Reusable components to enhance usability for a consistent user experience
            </p>
          </div>
          <img src="/sold5.png" alt="Components" className="cs-img-full" />
        </section>

        {/* Section 6: User Flow */}
        <section className="cs-dashed-section">
          <div className="cs-text-content">
            <h2 className="cs-sec-title">User Flow</h2>
            <p className="cs-sec-desc">
              Now lets put all these together, and let me guide you through the Onboarding Flow of the app.
            </p>
          </div>
          <img src="/sold6.png" alt="User Flow" className="cs-img-full" />
        </section>

        {/* Section 7: Usability Testing */}
        <section className="cs-dashed-section">
          <div className="cs-text-content">
            <h2 className="cs-sec-title">Usability testing</h2>
            <p className="cs-sec-desc">
              To evaluate the effectiveness of the redesigned search and filtering experience in Sold AI, we conducted usability testing with a group of users interacting with the prototype.
            </p>
            <p className="cs-sec-desc">
              The objective was to understand how quickly users could discover relevant products, how easily they could apply filters, and how efficiently they could complete their search journey with minimal effort.
            </p>
          </div>
        </section>

        {/* Section 8: Impact & Final Outcome */}
        <section className="cs-dashed-section">
          <div className="cs-text-content">
            <h2 className="cs-sec-title">Impact & Final Outcome</h2>
            <p className="cs-sec-desc">
              After addressing key usability issues in the search and filtering experience, the interaction became more intuitive and streamlined. By reducing clutter and improving structure, users were able to find relevant products faster, apply filters with ease, and complete their search journey with significantly less effort.
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
