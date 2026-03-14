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

  useEffect(() => {
    if (!open) return
    const close = (e) => {
      if (!e.target.closest('#navbar-root')) setOpen(false)
    }
    document.addEventListener('mousedown', close)
    return () => document.removeEventListener('mousedown', close)
  }, [open])

  const navStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
    padding: '0 2rem',
    background: scrolled || open ? 'rgba(242,250,242,0.95)' : 'transparent',
    backdropFilter: scrolled || open ? 'blur(16px)' : 'none',
    borderBottom: scrolled || open ? '1px solid rgba(74,140,74,0.15)' : '1px solid transparent',
    transition: 'all 0.3s ease',
  }

  const links = [['/', 'Home'], ['/about', 'About'], ['/contact', 'Contact']]

  return (
    <header style={navStyle} id="navbar-root">
      <div style={{ maxWidth: 1200, margin: '0 auto', height: 72, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link to="/" style={{ fontFamily: 'Syne,sans-serif', fontWeight: 700, fontSize: '1.1rem', color: 'var(--green-deep)', textDecoration: 'none', letterSpacing: '-0.02em' }}>
          Tong dev
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} end style={({ isActive }) => ({
              fontFamily: 'Outfit,sans-serif', fontWeight: 500, fontSize: '0.95rem',
              color: isActive ? 'var(--green-soft)' : 'var(--green-deep)',
              textDecoration: 'none',
              borderBottom: isActive ? '2px solid var(--green-soft)' : '2px solid transparent',
              paddingBottom: 2, transition: 'color 0.2s',
            })}>
              {label}
            </NavLink>
          ))}
          <a href="https://github.com/heisernbergg0942" target="_blank" rel="noopener noreferrer"
            style={{ fontFamily: 'Outfit,sans-serif', fontWeight: 600, fontSize: '0.9rem', color: 'white', background: 'var(--green-deep)', padding: '0.5rem 1.3rem', borderRadius: 999, textDecoration: 'none' }}>
            GitHub
          </a>
        </nav>

        {/* Hamburger Button */}
        <button
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="hamburger-btn"
          style={{ display: 'none', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 5, width: 40, height: 40, background: 'none', border: 'none', cursor: 'pointer', padding: 6, borderRadius: 8 }}
        >
          <span style={{ display: 'block', width: 22, height: 2, background: 'var(--green-deep)', borderRadius: 2, transform: open ? 'translateY(7px) rotate(45deg)' : 'none', transition: 'transform 0.25s ease' }} />
          <span style={{ display: 'block', width: 22, height: 2, background: 'var(--green-deep)', borderRadius: 2, opacity: open ? 0 : 1, transition: 'opacity 0.2s ease' }} />
          <span style={{ display: 'block', width: 22, height: 2, background: 'var(--green-deep)', borderRadius: 2, transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none', transition: 'transform 0.25s ease' }} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className="mobile-menu" style={{ overflow: 'hidden', maxHeight: open ? 300 : 0, transition: 'max-height 0.35s ease', display: 'none' }}>
        <nav style={{ display: 'flex', flexDirection: 'column', padding: '0.75rem 0 1.25rem', gap: '0.25rem', borderTop: '1px solid rgba(74,140,74,0.12)' }}>
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} end onClick={() => setOpen(false)}
              style={({ isActive }) => ({
                fontFamily: 'Outfit,sans-serif', fontWeight: 500, fontSize: '1rem',
                color: isActive ? 'var(--green-soft)' : 'var(--green-deep)',
                textDecoration: 'none', padding: '0.65rem 0.75rem',
                borderLeft: isActive ? '3px solid var(--green-soft)' : '3px solid transparent',
                borderRadius: 6, transition: 'all 0.2s',
              })}>
              {label}
            </NavLink>
          ))}
          <a href="https://github.com/heisernbergg0942" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}
            style={{ fontFamily: 'Outfit,sans-serif', fontWeight: 600, fontSize: '0.95rem', color: 'white', background: 'var(--green-deep)', padding: '0.6rem 1.3rem', borderRadius: 999, textDecoration: 'none', marginTop: '0.5rem', alignSelf: 'flex-start' }}>
            GitHub
          </a>
        </nav>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
          .mobile-menu { display: block !important; }
        }
      `}</style>
    </header>
  )
}