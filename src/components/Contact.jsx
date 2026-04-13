import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

// Local SVG icons to fix dependency issues
const Mail = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
const Linkedin = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
const Instagram = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
const ArrowUpRight = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>

export default function Contact() {
  const container = useRef(null)

  useGSAP(() => {
    gsap.from('.contact-reveal', {
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%'
      },
      y: 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: 'expo.out'
    })
  }, { scope: container })

  return (
    <footer className="contact-section" ref={container} id="contact">
      <div className="contact-wrap">
        <h2 className="contact-title contact-reveal">Let's build<br />something great.</h2>
        
        <div className="contact-links contact-reveal">
          <a href="mailto:hello@prakrati.com" className="contact-link">
            <div className="link-circle"><Mail /></div>
            <span>Email</span>
            <ArrowUpRight className="arrow" />
          </a>
          <a href="https://linkedin.com/in/prakrati" target="_blank" rel="noreferrer" className="contact-link">
            <div className="link-circle"><Linkedin /></div>
            <span>LinkedIn</span>
            <ArrowUpRight className="arrow" />
          </a>
          <a href="https://instagram.com/prakrati" target="_blank" rel="noreferrer" className="contact-link">
            <div className="link-circle"><Instagram /></div>
            <span>Instagram</span>
            <ArrowUpRight className="arrow" />
          </a>
        </div>

        <div className="footer-bottom">
          <p>© 2024 Prakrati Jangid. All rights reserved.</p>
          <p>Handcrafted with love from Jaipur.</p>
        </div>
      </div>
    </footer>
  )
}
