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
// Refined Image Trail (Snake Move - V6 Perfection)
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
    
    // Check if mobile for refined trail
    this.isMobile = window.innerWidth < 768
    this.distThreshold = this.isMobile ? 250 : 140 
    
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
    
    // Scale further on mobile
    if (this.isMobile) img.style.width = '80px'
    
    img.style.left = `${x}px`
    img.style.top = `${y}px`
    
    this.container.appendChild(img)
    this.animate(img)
    this.index = (this.index + 1) % this.images.length
  }

  animate(img) {
    gsap.timeline({ onComplete: () => img.remove() })
      .to(img, { opacity: 1, scale: this.isMobile ? 0.6 : 0.8, duration: 0.5, ease: 'power2.out' })
      .to(img, { y: '+=30', opacity: 0, scale: 0.5, duration: 1, ease: 'power2.in' }, '+=0.2')
  }
}

// -------------------------------------------------------------------------
// Mobile Menu Logic
// -------------------------------------------------------------------------
function initMobileMenu() {
  const toggle = document.querySelector('.menu-toggle')
  const overlay = document.querySelector('.mobile-nav-overlay')
  const mLinks = document.querySelectorAll('.m-link')
  
  let isOpen = false
  
  const toggleMenu = () => {
    isOpen = !isOpen
    overlay.classList.toggle('open', isOpen)
    
    // Animate burger lines
    gsap.to('.line-1', { rotation: isOpen ? 45 : 0, y: isOpen ? 9 : 0, duration: 0.4 })
    gsap.to('.line-2', { rotation: isOpen ? -45 : 0, y: isOpen ? -9 : 0, duration: 0.4 })
    
    // Lock scroll
    document.body.style.overflow = isOpen ? 'hidden' : 'auto'
    
    if (isOpen) {
      gsap.from('.m-link', { y: 50, opacity: 0, stagger: 0.1, duration: 0.6, ease: 'power3.out' })
    }
  }

  toggle.addEventListener('click', toggleMenu)
  mLinks.forEach(link => link.addEventListener('click', toggleMenu))
}

// -------------------------------------------------------------------------
// Page Animations
// -------------------------------------------------------------------------
window.addEventListener('load', () => {
  gsap.to('#app', { opacity: 1, duration: 1.5 })
  new ImageTrail()
  initMobileMenu()
  initLuxeAnimations()
})

function initLuxeAnimations() {
  gsap.from('.reveal-text', {
    y: 30, opacity: 0, stagger: 0.2, duration: 1.5, ease: 'power3.out'
  })

  gsap.from('.floating-img', {
    y: 50, opacity: 0, duration: 2, ease: 'power2.out'
  })
}

// -------------------------------------------------------------------------
// Custom Cursor Logic
// -------------------------------------------------------------------------
if (window.innerWidth > 1024) {
  const cursor = document.querySelector('#custom-cursor')
  const cursorRing = document.querySelector('.cursor-ring')
  const cursorLabel = document.querySelector('.cursor-label')

  window.addEventListener('mousemove', (e) => {
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

  document.querySelectorAll('.glass-card, .btn').forEach(card => {
    card.addEventListener('mouseenter', () => setCursorState('hover'))
    card.addEventListener('mouseleave', () => setCursorState('default'))
  })
}

// -------------------------------------------------------------------------
// Project Injection & Section Reveals
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
    
    gsap.from(card, {
      scrollTrigger: { trigger: card, start: 'top 90%' },
      y: 60, opacity: 0, duration: 1.5, ease: 'power3.out', delay: i * 0.1
    })
  })
}

// Magnetic
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

gsap.utils.toArray('.about-card, .contact-wrap').forEach(target => {
  gsap.from(target, {
    scrollTrigger: { trigger: target, start: 'top 85%' },
    y: 50, opacity: 0, duration: 1.5, ease: 'power3.out'
  })
})
