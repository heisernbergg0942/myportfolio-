import { Link } from 'react-router-dom'
import TechStack from '../components/TechStack'

// ── EDIT THESE ──────────────────────────────────────────────
const PROFILE_IMAGE   = '/profilepicture.jpg'        
const GITHUB_REPO_URL = 'https://github.com/heisernbergg0942'
// ────────────────────────────────────────────────────────────

const projects = [
  { title: 'Project One',   desc: 'Quiz game:A full-stack web app  ( Teamwork project)',          
     tags: ['React','Laravel','Mysql','tailwindcss'], link: 'https://github.com/sengson-great/quizz-game-demo'},
  { title: 'Project Two',   desc: 'Car Rental System web app with Stripe payment ( solo project )',
    tags: ['React','Laravel','Mysql','tailwindcss','Stripe'], link: 'https://github.com/heisernbergg0942/Car-Rental-System-'}

]

export default function Home() {
  return (
    <main>
      {/* ── HERO ─────────────────────────────────── */}
      <section style={{
        minHeight: '100vh', paddingTop: 72, display: 'flex', alignItems: 'center',
        background: 'var(--green-mist)', position: 'relative', overflow: 'hidden',
      }}>
        {/* subtle background accent */}
        <div style={{
          position:'absolute', top:'-10%', right:'-5%', width:'45vw', height:'45vw',
          background:'radial-gradient(circle, rgba(168,213,168,0.25) 0%, transparent 70%)',
          pointerEvents:'none',
        }} />
        <div style={{
          position:'absolute', bottom:'-5%', left:'-5%', width:'35vw', height:'35vw',
          background:'radial-gradient(circle, rgba(74,140,74,0.10) 0%, transparent 70%)',
          pointerEvents:'none',
        }} />

        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 2rem', width:'100%', display:'flex', alignItems:'center', justifyContent:'space-between', gap:'3rem', flexWrap:'wrap' }}>
          {/* Left — big text */}
          <div style={{ flex:'1 1 480px' }}>
            <p className="anim-up d1" style={{ fontFamily:'JetBrains Mono,monospace', fontSize:'0.8rem', color:'var(--green-soft)', textTransform:'uppercase', letterSpacing:'0.18em', marginBottom:'1.2rem' }}>
              Full Stack Developer
            </p>

            {/* Giant headline like reference */}
            <h1 className="anim-up d2" style={{
              fontFamily:'Syne,sans-serif', fontWeight:800,
              fontSize:'clamp(3.5rem, 8vw, 7rem)',
              lineHeight:0.95, letterSpacing:'-0.04em',
              color:'var(--green-deep)', marginBottom:'1.8rem',
            }}>
              Hi, I'm<br />
              <span style={{ color:'var(--green-soft)' }}>Tong.</span>
            </h1>

        

            <div className="anim-up d4" style={{ display:'flex', gap:'1rem', flexWrap:'wrap' }}>
              <Link to="/contact" style={{
                fontFamily:'Outfit,sans-serif', fontWeight:600, fontSize:'0.95rem',
                color:'white', background:'var(--green-deep)',
                padding:'0.85rem 2rem', borderRadius:999, textDecoration:'none',
                transition:'all 0.2s',
              }}
              onMouseEnter={e=>{ e.currentTarget.style.background='var(--green-soft)'; e.currentTarget.style.transform='translateY(-2px)' }}
              onMouseLeave={e=>{ e.currentTarget.style.background='var(--green-deep)'; e.currentTarget.style.transform='translateY(0)' }}>
                Get in Touch
              </Link>
              <a href={GITHUB_REPO_URL} target="_blank" rel="noopener noreferrer" style={{
                fontFamily:'Outfit,sans-serif', fontWeight:600, fontSize:'0.95rem',
                color:'var(--green-deep)', background:'transparent',
                padding:'0.85rem 2rem', borderRadius:999, textDecoration:'none',
                border:'2px solid var(--green-light)', transition:'all 0.2s',
                display:'flex', alignItems:'center', gap:'0.5rem',
              }}
              onMouseEnter={e=>{ e.currentTarget.style.borderColor='var(--green-soft)'; e.currentTarget.style.color='var(--green-soft)'; e.currentTarget.style.transform='translateY(-2px)' }}
              onMouseLeave={e=>{ e.currentTarget.style.borderColor='var(--green-light)'; e.currentTarget.style.color='var(--green-deep)'; e.currentTarget.style.transform='translateY(0)' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
                View GitHub
              </a>
            </div>
          </div>

          {/* Right — photo (like reference image) */}
          <div className="anim-left d3" style={{ flex:'0 0 auto' }}>
            <div style={{
              width: 'clamp(240px, 28vw, 360px)',
              height: 'clamp(300px, 34vw, 440px)',
              borderRadius: 24,
              overflow: 'hidden',
              position: 'relative',
              background: 'var(--green-pale)',
              boxShadow: '0 24px 64px rgba(26,58,26,0.15)',
            }}>
              {PROFILE_IMAGE ? (
                <img src={PROFILE_IMAGE} alt="Profile" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
              ) : (
                <div style={{ width:'100%', height:'100%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:12, border:'2px dashed var(--green-light)' }}>
                  <svg width="48" height="48" fill="none" stroke="var(--green-light)" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                  </svg>
                  <p style={{ fontFamily:'JetBrains Mono,monospace', fontSize:'0.72rem', color:'var(--green-light)', textAlign:'center', padding:'0 1rem', lineHeight:1.6 }}>
                    Add your photo:<br/><code>public/profile.jpg</code>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── TECH STACK ───────────────────────────── */}
      <TechStack />

      {/* ── PROJECTS ─────────────────────────────── */}
      <section style={{ padding:'6rem 2rem', background:'var(--green-mist)' }}>
        <div style={{ maxWidth:1100, margin:'0 auto' }}>
          <div className="anim-up d1" style={{ marginBottom:'3.5rem' }}>
            <span style={{ fontFamily:'JetBrains Mono,monospace', fontSize:'0.75rem', color:'var(--green-soft)', textTransform:'uppercase', letterSpacing:'0.15em' }}>
              Work
            </span>
            <h2 style={{ fontFamily:'Syne,sans-serif', fontWeight:800, fontSize:'clamp(2rem,4vw,3rem)', color:'var(--green-deep)', marginTop:'0.4rem', letterSpacing:'-0.03em' }}>
              Featured Projects
            </h2>
          </div>

          <div style={{ display:'flex', justifyContent:'center', gap:'1.5rem', flexWrap:'wrap'}}>
            {projects.map((p, i) => (
              <div key={i} className={`anim-up d${i + 2}`}
                style={{
                  background:'white', borderRadius:20, padding:'2rem',
                  border:'1px solid var(--green-pale)',
                  transition:'all 0.25s', display:'flex', flexDirection:'column', gap:'1rem',
                }}
                onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-6px)'; e.currentTarget.style.boxShadow='0 20px 48px rgba(26,58,26,0.10)'; e.currentTarget.style.borderColor='var(--green-light)' }}
                onMouseLeave={e=>{ e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='none'; e.currentTarget.style.borderColor='var(--green-pale)' }}
              >
                {/* Number badge */}
                <span style={{ fontFamily:'JetBrains Mono,monospace', fontSize:'0.7rem', color:'var(--green-light)', fontWeight:500 }}>
                  0{i + 1}
                </span>
                <h3 style={{ fontFamily:'Syne,sans-serif', fontWeight:700, fontSize:'1.3rem', color:'var(--green-deep)', letterSpacing:'-0.02em' }}>
                  {p.title}
                </h3>
                <p style={{ fontFamily:'Outfit,sans-serif', fontWeight:300, fontSize:'0.92rem', color:'var(--green-mid)', lineHeight:1.7, flex:1 }}>
                  {p.desc}
                </p>
                <div style={{ display:'flex', flexWrap:'wrap', gap:'0.4rem' }}>
                  {p.tags.map(t => (
                    <span key={t} style={{ fontFamily:'JetBrains Mono,monospace', fontSize:'0.7rem', color:'var(--green-soft)', background:'var(--green-pale)', padding:'0.25rem 0.7rem', borderRadius:999 }}>
                      {t}
                    </span>
                  ))}
                </div>
                <a href={p.link} target="_blank" rel="noopener noreferrer" style={{
                  fontFamily:'Outfit,sans-serif', fontWeight:600, fontSize:'0.85rem',
                  color:'var(--green-deep)', textDecoration:'none',
                  display:'flex', alignItems:'center', gap:'0.4rem',
                  marginTop:'0.25rem', transition:'color 0.2s',
                }}
                onMouseEnter={e=>e.currentTarget.style.color='var(--green-soft)'}
                onMouseLeave={e=>e.currentTarget.style.color='var(--green-deep)'}>
                  View on GitHub
                  <span style={{ fontSize:'1rem' }}>→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────── */}
      <footer style={{ background:'var(--green-deep)', padding:'3rem 2rem' }}>
        <div style={{ maxWidth:1100, margin:'0 auto', display:'flex', flexWrap:'wrap', alignItems:'center', justifyContent:'space-between', gap:'1rem' }}>
          <span style={{ fontFamily:'Syne,sans-serif', fontWeight:700, fontSize:'1rem', color:'white' }}>Tong dev</span>
          <div style={{ display:'flex', gap:'2rem' }}>
            {[['/', 'Home'],['/about','About'],['/contact','Contact']].map(([to,label]) => (
              <a key={to} href={to} style={{ fontFamily:'Outfit,sans-serif', fontSize:'0.85rem', color:'rgba(255,255,255,0.6)', textDecoration:'none' }}>{label}</a>
            ))}
          </div>
          <span style={{ fontFamily:'JetBrains Mono,monospace', fontSize:'0.7rem', color:'rgba(255,255,255,0.35)' }}>
            © {new Date().getFullYear()} · Tong dev
          </span>
        </div>
      </footer>
    </main>
  )
}
