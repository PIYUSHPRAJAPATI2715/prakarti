import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export default function Works({ onViewStudy }) {
  const container = useRef(null)

  useGSAP(() => {
    const cards = gsap.utils.toArray('.bento-card')
    
    // Pin the grid and animate overlap
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.bento-grid',
        start: 'top 15%',
        end: '+=100%', // Scroll distance for the animation
        pin: true,
        scrub: 1,
      }
    })

    // Animate second card overlapping the first
    if (cards.length > 1) {
      tl.to(cards[0], {
        scale: 0.95,
        opacity: 0.7,
        filter: 'blur(4px)',
        duration: 1,
      }, 0)

      tl.fromTo(cards[1], {
        y: '50px', // Start slightly below
      }, {
        y: '-664px', // Move up to cover first card (Card height 600px + gap 64px)
        duration: 1,
        ease: 'none'
      }, 0)
    }

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
          <div className="bento-card" style={{ zIndex: 1 }}>
            <div className="bento-info">
              <div className="bento-logo openstatus">
                <img src="/open.png" alt="" style={{ height: '90px' }} />

              </div>
              <p className="bento-desc">
                Transforming a Complex Onboarding Flow into a Seamless Journey.
              </p>
              <button
                onClick={() => onViewStudy('openstatus')}
                className="bento-btn-img"
              >
                <img src="/button1.png" alt="View casestudy" />
              </button>
            </div>
            <div className="bento-visual green">
              <img src="/project2.png" alt="" className="mockup-img" />
            </div>
          </div>

          {/* Card 2: SOLD AI */}
          <div className="bento-card" style={{ zIndex: 2 }}>
            <div className="bento-info">
              <div className="bento-logo soldai">
                <img src="/sold.png" alt="SOLD AI logo" style={{ height: '70px' }} />
              </div>
              <p className="bento-desc">
                Improving Search Experience for Better Product Discovery
              </p>
              <button
                onClick={() => onViewStudy('soldai')}
                className="bento-btn-img"
              >
                <img src="/button1.png" alt="View casestudy" />
              </button>
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
