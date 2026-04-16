import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export default function Works({ onViewStudy }) {
  const container = useRef(null)

  useGSAP(() => {
    const cards = gsap.utils.toArray('.bento-card')
    cards.forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 90%',
          toggleActions: 'play none none none'
        },
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'expo.out',
        delay: i * 0.1
      })
    })
  }, { scope: container })

  return (
    <section id="work" className="work-section" ref={container}>
      <div className="section-wrapper">
        <div className="section-header">
          <h2 className="section-title">Selected Work</h2>
          <p className="section-subtitle">From strategy to screens — a glimpse into my design process and impact</p>
        </div>

        <div className="bento-grid">
          {/* Card 1: OpenStatus */}
          <div className="bento-card">
            <div className="bento-info">
              <div className="bento-logo openstatus">
                <img src="/open.png" alt="" style={{ height: '50px' }} />

              </div>
              <p className="bento-desc">
                Transforming a Complex Onboarding Flow into a Seamless Journey.
              </p>
              <button
                onClick={() => onViewStudy('openstatus')}
                className="bento-btn"
              >
                View casestudy
              </button>
            </div>
            <div className="bento-visual green">
              <img src="/project2.png" alt="" className="mockup-img" />
            </div>
          </div>

          {/* Card 2: SOLD AI */}
          <div className="bento-card">
            <div className="bento-info">
              <div className="bento-logo soldai">
                <img src="/sold.png" alt="SOLD AI logo" style={{ height: '50px' }} />
              </div>
              <p className="bento-desc">
                Improving Search Experience for Better Product Discovery
              </p>
              <a href="#" className="bento-btn">View casestudy</a>
            </div>
            <div className="bento-visual red">
              <img src="/project1.png" alt="SOLD AI App" className="mockup-img" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
