import './style.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

// Register GSAP Plugins
gsap.registerPlugin(ScrollTrigger)

// -------------------------------------------------------------------------
// Smooth Scroll (Lenis)
// -------------------------------------------------------------------------
const lenis = new Lenis({
  duration: 1.5,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smooth: true,
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

// -------------------------------------------------------------------------
// Refined Image Trail (Snake Move - Luxe Edition)
// -------------------------------------------------------------------------
class ImageTrail {
  constructor() {
    this.container = document.querySelector('#image-trail-container')
    this.images = [
      '/figma.png', '/canva.png', '/trail1.png', 
      '/project1.png', '/project2.png', '/project3.png', '/project4.png'
    ]
    this.index = 0
    this.lastPos = { x: 0, y: 0 }
    this.distThreshold = 140
    this.init()
  }

  init() {
    window.addEventListener('mousemove', (e) => {
      const dist = Math.hypot(e.clientX - this.lastPos.x, e.clientY - this.lastPos.y)
      if (dist > this.distThreshold) {
        this.spawn(e.clientX, e.clientY)
        this.lastPos = { x: e.clientX, y: e.clientY }
      }
    })
  }

  spawn(x, y) {
    const img = document.createElement('img')
    img.src = this.images[this.index]
    img.className = 'trail-image'
    img.style.left = `${x}px`
    img.style.top = `${y}px`
    
    this.container.appendChild(img)
    this.animate(img)
    this.index = (this.index + 1) % this.images.length
  }

  animate(img) {
    gsap.timeline({ onComplete: () => img.remove() })
      .to(img, { opacity: 1, scale: 0.8, duration: 0.5, ease: 'power2.out' })
      .to(img, { y: '+=30', opacity: 0, scale: 0.6, duration: 1, ease: 'power2.in' }, '+=0.2')
  }
}

// -------------------------------------------------------------------------
// Page Animations
// -------------------------------------------------------------------------
window.addEventListener('load', () => {
  gsap.to('#app', { opacity: 1, duration: 1.5 })
  new ImageTrail()
  initLuxeAnimations()
})

function initLuxeAnimations() {
  // Hero reveal
  gsap.from('.reveal-text', {
    y: 30,
    opacity: 0,
    stagger: 0.2,
    duration: 1.5,
    ease: 'power3.out'
  })

  gsap.from('.floating-img', {
    y: 50,
    opacity: 0,
    duration: 2,
    ease: 'power2.out'
  })
  
  // Floating animation for hero visual
  gsap.to('.floating-img', {
    y: 20,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  })

  // Horizontal skills roll (simple auto-scroll)
  gsap.to('.skills-strip', {
    xPercent: -20,
    scrollTrigger: {
      trigger: '.skills-strip',
      scrub: 1
    }
  })
}

// -------------------------------------------------------------------------
// Custom Luxe Cursor Logic
// -------------------------------------------------------------------------
const cursor = document.querySelector('#custom-cursor')
const cursorRing = document.querySelector('.cursor-ring')
const cursorLabel = document.querySelector('.cursor-label')

window.addEventListener('mousemove', (e) => {
  // Cursor follow
  gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.4, ease: 'power2.out' })
})

const setCursorState = (state) => {
  if (state === 'hover') {
    gsap.to(cursorRing, { width: 80, height: 80, borderColor: 'rgba(0,0,0,0.8)', duration: 0.4 })
    gsap.to(cursorLabel, { opacity: 1, duration: 0.3 })
  } else {
    gsap.to(cursorRing, { width: 30, height: 30, borderColor: 'rgba(0,0,0,0.1)', duration: 0.4 })
    gsap.to(cursorLabel, { opacity: 0, duration: 0.3 })
  }
}

// -------------------------------------------------------------------------
// Project Injection (Luxe Style)
// -------------------------------------------------------------------------
const projects = [
  { title: 'Aura Bloom', cat: 'Minimal Web Identity', img: '/project1.png' },
  { title: 'Nexa Dashboard', cat: 'SaaS Design System', img: '/project2.png' },
  { title: 'Echo Sounds', cat: 'Interactive Audio UI', img: '/project3.png' },
  { title: 'Lumina Art', cat: 'Curated Web Gallery', img: '/project4.png' }
]

const grid = document.querySelector('#main-grid')
if (grid) {
  projects.forEach((proj, i) => {
    const card = document.createElement('div')
    card.className = 'glass-card'
    card.innerHTML = `
      <div class="card-img-wrap">
        <img src="${proj.img}" alt="${proj.title}">
      </div>
      <div class="card-info">
        <h3>${proj.title}</h3>
        <p>${proj.cat}</p>
      </div>
    `
    grid.appendChild(card)
    
    card.addEventListener('mouseenter', () => setCursorState('hover'))
    card.addEventListener('mouseleave', () => setCursorState('default'))
    
    // Entrance animation
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 90%'
      },
      y: 80,
      opacity: 0,
      duration: 1.5,
      ease: 'power3.out',
      delay: i * 0.1
    })
  })
}

// -------------------------------------------------------------------------
// Magnetic Interaction
// -------------------------------------------------------------------------
document.querySelectorAll('.magnetic').forEach(el => {
  el.addEventListener('mousemove', (e) => {
    const s = 10
    const b = el.getBoundingClientRect()
    const x = (e.clientX - b.left - b.width / 2) / b.width * s
    const y = (e.clientY - b.top - b.height / 2) / b.height * s
    gsap.to(el, { x, y, duration: 0.5 })
  })
  el.addEventListener('mouseleave', () => gsap.to(el, { x: 0, y: 0, duration: 0.5 }))
})

// General Section Revels
gsap.utils.toArray('.about-card, .contact-wrap').forEach(target => {
  gsap.from(target, {
    scrollTrigger: {
      trigger: target,
      start: 'top 85%'
    },
    y: 50,
    opacity: 0,
    duration: 1.5,
    ease: 'power3.out'
  })
})
