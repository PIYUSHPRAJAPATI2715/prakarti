import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Works from './components/Works'
import About from './components/About'
import Moodboard from './components/Moodboard'
import Archive from './components/Archive'
import Contact from './components/Contact'
import CaseStudyOpenStatus from './components/CaseStudyOpenStatus'
import Cursor from './components/Cursor'
import Preloader from './components/Preloader'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const [loading, setLoading] = useState(true)
  const [view, setView] = useState('home') // 'home' | 'openstatus'

  useEffect(() => {
    // Scroll to top when view changes
    window.scrollTo(0, 0)
    
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    })

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })
    
    gsap.ticker.lagSmoothing(0, 0)

    return () => {
      lenis.destroy()
      gsap.ticker.remove(lenis.raf)
    }
  }, [view])

  return (
    <>
      <Cursor />
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      
      <div id="app-content" style={{ visibility: loading ? 'hidden' : 'visible' }}>
        {view === 'home' ? (
          <>
            <Header onNavigate={(v) => setView(v)} />
            <main>
              <Hero />
              <Works onViewStudy={(v) => setView(v)} />
              <About />
              <Moodboard />
              <Archive />
              <Contact />
            </main>
          </>
        ) : (
          <CaseStudyOpenStatus onBack={() => setView('home')} />
        )}
      </div>
    </>
  )
}
