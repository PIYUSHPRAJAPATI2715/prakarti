import React, { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function Cursor() {
  const cursorRef = useRef(null)

  useGSAP(() => {
    const handleMouseMove = (e) => {
      gsap.to(cursorRef.current, { 
        x: e.clientX, 
        y: e.clientY, 
        duration: 0.6, 
        ease: 'power3.out' 
      })
    }

    if (window.innerWidth > 1024) {
      window.addEventListener('mousemove', handleMouseMove)

      const handleEnter = () => {
        gsap.to(cursorRef.current, { scale: 1.5, duration: 0.3, ease: 'power2.out' })
      }
      const handleLeave = () => {
        gsap.to(cursorRef.current, { scale: 1, duration: 0.3, ease: 'power2.out' })
      }

      const applyHoverEvents = () => {
        document.querySelectorAll('.nav-btn, .bento-btn, .contact-link').forEach(btn => {
          btn.addEventListener('mouseenter', handleEnter)
          btn.addEventListener('mouseleave', handleLeave)
        })
      }

      setTimeout(applyHoverEvents, 2000)
    }
  }, [])

  return (
    <div id="custom-cursor" ref={cursorRef}>
      <div className="cursor-dot"></div>
      <div className="cursor-ring"></div>
    </div>
  )
}
