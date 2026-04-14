import React, { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function Cursor() {
  const cursorRef = useRef(null)
  const labelRef = useRef(null)

  const cursorImage = '/curser.png'

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


  return (
    <>
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
