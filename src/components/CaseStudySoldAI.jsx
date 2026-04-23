import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const CloseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>

export default function CaseStudySoldAI({ onBack }) {
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
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out'
      })
    })

    // Fade in intro
    gsap.from('.cs-header', {
      opacity: 0,
      y: 40,
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
        {/* Intro Section */}
        <div className="cs-header">
          <div className="cs-brand soldai">
            <img src="/sold.png" alt="" style={{ height: '70px' }} />

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

        {/* Section 1: Overview */}
        <section className="cs-section">
          <div className="cs-text-content" style={{ margin: '0 auto 4rem auto', textAlign: 'center' }}>
            <h2 className="cs-sec-title">Let's start with the project overview</h2>
            <p className="cs-sec-desc">
              SOLD AI is an AI-powered marketplace assistant that helps users instantly create product listings by analyzing images, generating descriptions, and suggesting optimal pricing.
            </p>
          </div>
          <img src="/sold1.png" alt="SOLD AI Overview" className="cs-img-banner" />
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
          <img src="/sold2.png" alt="The Challenge" className="cs-img-full" />
        </section>

        {/* Section 3: Research And Analysis */}
        <section className="cs-section">
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

          <div className="cs-sticky-notes">
            <div className="cs-sticky-note">
              <p>How might we make search feel more responsive and guided?</p>
            </div>
            <div className="cs-sticky-note yellow">
              <p>How might we encourage users to refine results instead of endlessly scrolling?</p>
            </div>
            <div className="cs-sticky-note">
              <p>How might we design for faster scanning and decision-making?</p>
            </div>
          </div>

          <img src="/sold3.png" alt="Research And Analysis" className="cs-img-full" />
        </section>

        {/* Section 4: Design Execution */}
        <section className="cs-section">
          <div className="cs-text-content">
            <h2 className="cs-sec-title">Design Execution</h2>
            <p className="cs-sec-desc">
              Following thorough research, we have identified key solutions; let's break them down step-by-step as we proceed.
            </p>
          </div>
          <img src="/sold4.png" alt="Design Execution" className="cs-img-full" />
        </section>

        {/* Section 5: Details */}
        <section className="cs-section">
          <div className="cs-text-content">
            <h2 className="cs-sec-title">Product Search</h2>
            <ul className="cs-list">
              <li>Added real-time search suggestions, a feature missing in the previous experience.</li>
              <li>Reduced user effort by 30-40%</li>
              <li>Increased likelihood of finding relevant results faster by ~35%</li>
            </ul>
          </div>
          <img src="/sold5.png" alt="Improved Sort & Filter" className="cs-img-full" />
        </section>

        {/* Section 6: User Flow / Outcome */}
        <section className="cs-section">
          <div className="cs-text-content">
            <h2 className="cs-sec-title">Usability testing</h2>
            <p className="cs-sec-desc">
              To evaluate the effectiveness of the redesigned search and filtering experience in Sold AI, we conducted usability testing with a group of users interacting with the prototype.
            </p>
            <p className="cs-sec-desc">
              The objective was to understand how quickly users could discover relevant products, how easily they could apply filters, and how efficiently they could complete their search journey with minimal effort.
            </p>

            <h2 className="cs-sec-title" style={{ marginTop: '4rem' }}>Impact & Final Outcome</h2>
            <p className="cs-sec-desc">
              After addressing key usability issues in the search and filtering experience, the interaction became more intuitive and streamlined. By reducing clutter and improving structure, users were able to find relevant products faster, apply filters with ease, and complete their search journey with significantly less effort.
            </p>
          </div>
          <img src="/sold6.png" alt="Impact & Final Outcome" className="cs-img-banner" />
        </section>

        <div className="cs-footer">
          <button onClick={onBack} className="cs-btn-primary">Back to Home</button>
        </div>
      </div>
    </div>
  )
}
