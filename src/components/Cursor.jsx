import React, { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function Cursor() {
  const cursorRef = useRef(null)
  const labelRef = useRef(null)
  const trailContainerRef = useRef(null)
  const [showPrakarti, setShowPrakarti] = useState(true)

  const cursorImage = '/curser.png'

  const randomPrakartiImages = ['/p1.jpeg', '/p2.jpeg', '/p3.jpeg', '/p4.jpeg', '/p5.jpeg', '/p6.jpeg', '/p7.jpeg', '/p8.jpeg', '/p9.jpeg']

  useGSAP(() => {
    // Basic magnetic cursor logic
    const handleMouseMove = (e) => {
      gsap.to(cursorRef.current, { 
        x: e.clientX, 
        y: e.clientY, 
        duration: 0.6, 
        ease: 'power3.out' 
      })
    }

    // Basic magnetic cursor logic
    if (window.innerWidth > 1024) {
      window.addEventListener('mousemove', handleMouseMove)

      const handleEnter = () => {
        gsap.to(cursorRef.current, { scale: 2, duration: 0.3, ease: 'power2.out' })
        gsap.to(labelRef.current, { opacity: 1, duration: 0.3 })
      }
      const handleLeave = () => {
        gsap.to(cursorRef.current, { scale: 1, duration: 0.3, ease: 'power2.out' })
        gsap.to(labelRef.current, { opacity: 0, duration: 0.3 })
      }

      const applyHoverEvents = () => {
        document.querySelectorAll('.nav-btn, .bento-btn, .contact-link').forEach(btn => {
          btn.addEventListener('mouseenter', handleEnter)
          btn.addEventListener('mouseleave', handleLeave)
        })
      }

      // Delay applying to let DOM render
      setTimeout(applyHoverEvents, 2000)
    }
  }, [])

  // Snake tail logic
  useEffect(() => {
    let lastPos = { x: 0, y: 0 }
    let distThreshold = 120

    // We use a ref to get the absolute latest state in the mouse handler without re-binding
    const showPrakartiRef = { current: showPrakarti }
    showPrakartiRef.current = showPrakarti

    const spawn = (x, y) => {
      const img = document.createElement('img')
      img.src = randomPrakartiImages[Math.floor(Math.random() * randomPrakartiImages.length)]
      img.style.width = '250px'
      img.style.height = '250px'

      img.className = 'trail-image'
      img.style.objectFit = 'cover'
      img.style.borderRadius = '24px' // More premium rounded corners
      img.style.position = 'fixed'
      img.style.pointerEvents = 'none'
      img.style.zIndex = '1000'
      img.style.left = `${x}px`
      img.style.top = `${y}px`
      img.style.transform = `translate(-50%, -50%) rotate(${Math.random() * 20 - 10}deg)`
      img.style.boxShadow = '0 20px 50px rgba(0,0,0,0.2)'

      if (trailContainerRef.current) {
        trailContainerRef.current.appendChild(img)
      }

      gsap.timeline({ onComplete: () => img.remove() })
        .fromTo(img,
          { opacity: 0, scale: 0.2 },
          { opacity: 1, scale: 1, duration: 0.3, ease: 'back.out' }
        )
        .to(img, {
          y: '-=60',
          opacity: 0,
          scale: 0.5,
          duration: 1,
          ease: 'power2.in'
        }, '+=0.2')
    }

    const mouseHandler = (e) => {
      // Robust check for hero section
      const target = document.elementFromPoint(e.clientX, e.clientY)
      const isOverHero = target?.closest('.hero-section') // Using class as well for safety

      if (!isOverHero) return

      const dist = Math.hypot(e.clientX - lastPos.x, e.clientY - lastPos.y)
      if (dist > distThreshold) {
        spawn(e.clientX, e.clientY)
        lastPos = { x: e.clientX, y: e.clientY }
      }
    }
    
    // Also add a scroll listener to update element under cursor if needed, 
    // but mousemove is usually enough.

    if (window.innerWidth > 1024) {
      window.addEventListener('mousemove', mouseHandler)
    }
    return () => window.removeEventListener('mousemove', mouseHandler)
  }, [showPrakarti])

  return (
    <>
      <div id="image-trail-container" style={{ pointerEvents: 'none', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 999 }} ref={trailContainerRef}></div>
      <div id="custom-cursor" ref={cursorRef} style={{ width: '40px', height: '40px', position: 'fixed', zIndex: '9999', pointerEvents: 'none' }}>
        <img
          src={cursorImage}
          alt="cursor"
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
        <div className="cursor-label" ref={labelRef} style={{ position: 'absolute', top: '50px', whiteSpace: 'nowrap', opacity: 0 }}></div>
      </div>
    </>
  )
}
