import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const navStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
    padding: '0 2rem',
    background: scrolled ? 'rgba(242,250,242,0.9)' : 'transparent',
    backdropFilter: scrolled ? 'blur(16px)' : 'none',
    borderBottom: scrolled ? '1px solid rgba(74,140,74,0.15)' : '1px solid transparent',
    transition: 'all 0.3s ease',
  }

  return (
    <header style={navStyle}>
      <div style={{ maxWidth:1200, margin:'0 auto', height:72, display:'flex', alignItems:'center', justifyContent:'space-between' }}>
        <Link to="/" style={{ fontFamily:'Syne,sans-serif', fontWeight:700, fontSize:'1.1rem', color:'var(--green-deep)', textDecoration:'none', letterSpacing:'-0.02em' }}>
          Tong dev
        </Link>

        <nav style={{ display:'flex', alignItems:'center', gap:'2rem' }}>
          {[['/', 'Home'],['/about','About'],['/contact','Contact']].map(([to,label]) => (
            <NavLink key={to} to={to} end style={({ isActive }) => ({
              fontFamily:'Outfit,sans-serif', fontWeight:500, fontSize:'0.95rem',
              color: isActive ? 'var(--green-soft)' : 'var(--green-deep)',
              textDecoration:'none',
              borderBottom: isActive ? '2px solid var(--green-soft)' : '2px solid transparent',
              paddingBottom:2, transition:'color 0.2s',
            })}>
              {label}
            </NavLink>
          ))}
          <a href="https://github.com/heisernbergg0942" target="_blank" rel="noopener noreferrer"
            style={{ fontFamily:'Outfit,sans-serif', fontWeight:600, fontSize:'0.9rem', color:'white', background:'var(--green-deep)', padding:'0.5rem 1.3rem', borderRadius:999, textDecoration:'none' }}>
            GitHub
          </a>
        </nav>
      </div>
    </header>
  )
}
