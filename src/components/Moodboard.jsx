import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const photos = [
  { src: '/p1.jpeg', alt: 'Inspired 1', className: 'pw-1' },
  { src: '/p12.jpeg', alt: 'Inspired 2', className: 'pw-2' },
  { src: '/p8.jpeg', alt: 'Inspired 3', className: 'pw-3' },
  { src: '/p9.jpeg', alt: 'Inspired 4', className: 'pw-4' },
  { src: '/p10.jpeg', alt: 'Inspired 5', className: 'pw-5' },
  { src: '/pj.jpeg', alt: 'Inspired 6', className: 'pw-6' },
]

export default function Moodboard() {
  const containerRef = useRef(null)

  useGSAP(() => {
    gsap.from('.polaroid-wrapper', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      },
      y: 100,
      opacity: 0,
      duration: 1.5,
      stagger: 0.1,
      ease: 'expo.out'
    })

    gsap.from('.moodboard-doodle-1, .moodboard-doodle-2', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 70%',
      },
      scale: 0.8,
      opacity: 0,
      duration: 2,
      ease: 'elastic.out(1, 0.5)'
    })
  }, { scope: containerRef })

  return (
    <section id="moodboard" className="moodboard-section">
      <div className="moodboard-container" ref={containerRef}>
        <div className="moodboard-doodle-1">
          <img src="/inspired.png" alt="Inspired by Nature" style={{ height: '100px' }} />
        </div>

        <div className="moodboard-doodle-teal">
          <img src="/travel.png" alt="Travel" style={{ height: '150px' }} />
        </div>

        {/* Pink City Label and Doodle */}
        <div className="moodboard-doodle-2">
          <img src="/pinkcity.png" alt="Doodle" style={{ height: '100px' }} />
        </div>


        {photos.map((photo, i) => (
          <div key={i} className={`polaroid-wrapper ${photo.className}`}>
            <div className="polaroid-swing">
              <div className="polaroid-pin"></div>
              <div className="polaroid">
                <img src={photo.src} alt={photo.alt} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
