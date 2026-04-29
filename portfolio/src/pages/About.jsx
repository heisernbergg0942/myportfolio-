// ── EDIT THESE ──────────────────────────────────────────────
const PROFILE_IMAGE = '/profilepicture.jpg'
const GITHUB_URL    = 'https://github.com/heisernbergg0942'
// ────────────────────────────────────────────────────────────

export default function About() {
  return (
    <main style={{ minHeight:'100vh', paddingTop:72, background:'var(--green-mist)' }}>
      {/* Hero bar */}
      <section style={{ padding:'5rem 2rem 4rem', borderBottom:'1px solid var(--green-pale)', background:'white' }}>
        <div style={{ maxWidth:1100, margin:'0 auto' }}>
          <p className="anim-up d1" style={{ fontFamily:'JetBrains Mono,monospace', fontSize:'0.75rem', color:'var(--green-soft)', textTransform:'uppercase', letterSpacing:'0.15em', marginBottom:'1rem' }}>
            About Me
          </p>
          <h1 className="anim-up d2" style={{ fontFamily:'Syne,sans-serif', fontWeight:800, fontSize:'clamp(3rem,7vw,5.5rem)', color:'var(--green-deep)', letterSpacing:'-0.04em', lineHeight:0.95 }}>
            Crafting the web,<br /><span style={{ color:'var(--green-soft)' }}>one line at a time.</span>
          </h1>
        </div>
      </section>

      {/* Bio + photo */}
      <section style={{ padding:'5rem 2rem' }}>
        <div style={{ maxWidth:1100, margin:'0 auto', display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:'4rem', alignItems:'center' }}>
          {/* Photo */}
          <div className="anim-scale d2" style={{ display:'flex', justifyContent:'center' }}>
            <div style={{ width:'clamp(220px,30vw,340px)', height:'clamp(280px,36vw,420px)', borderRadius:24, overflow:'hidden', background:'var(--green-pale)', boxShadow:'0 20px 60px rgba(26,58,26,0.12)', border:'1px solid var(--green-light)' }}>
              {PROFILE_IMAGE ? (
                <img src={PROFILE_IMAGE} alt="Profile" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
              ) : (
                <div style={{ width:'100%', height:'100%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:12, border:'2px dashed var(--green-light)' }}>
                  <svg width="48" height="48" fill="none" stroke="var(--green-light)" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                  </svg>
                  <p style={{ fontFamily:'JetBrains Mono,monospace', fontSize:'0.72rem', color:'var(--green-light)', textAlign:'center', padding:'0 1rem', lineHeight:1.6 }}>
                    Add photo:<br/><code>public/profile.jpg</code>
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Text */}
          <div className="anim-up d3">
            <h2 style={{ fontFamily:'Syne,sans-serif', fontWeight:700, fontSize:'1.8rem', color:'var(--green-deep)', letterSpacing:'-0.03em', marginBottom:'1.5rem' }}>
              Hello! I'm <span style={{ color:'var(--green-soft)' }}>Tong</span>
            </h2>
            <div style={{ display:'flex', flexDirection:'column', gap:'1rem' }}>
              {[
                "I'm a full-stack developer living in phnompenh. I love building things to slove problem that peoples need.",
                "My journey in tech started when I'm in 2rd year of my college i've build full stack web application about quiz game. Since then, I've been dedicated to crafting digital experiences that are both beautiful and functional.",
                "if you are interested with my project and want to keep in touch you can check out my github repo below I'm always looking to learn new things and collaborate on exciting projects.",
              ].map((text, i) => (
                <p key={i} style={{ fontFamily:'Outfit,sans-serif', fontWeight:300, fontSize:'1rem', color:'var(--green-mid)', lineHeight:1.8 }}>{text}</p>
              ))}
            </div>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" style={{
              display:'inline-flex', alignItems:'center', gap:'0.5rem',
              marginTop:'2rem', fontFamily:'Outfit,sans-serif', fontWeight:600, fontSize:'0.9rem',
              color:'white', background:'var(--green-deep)', padding:'0.8rem 1.8rem', borderRadius:999, textDecoration:'none',
              transition:'all 0.2s',
            }}
            onMouseEnter={e=>{ e.currentTarget.style.background='var(--green-soft)'; e.currentTarget.style.transform='translateY(-2px)' }}
            onMouseLeave={e=>{ e.currentTarget.style.background='var(--green-deep)'; e.currentTarget.style.transform='translateY(0)' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub Profile
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding:'0 2rem 5rem' }}>
        <div style={{ maxWidth:1100, margin:'0 auto', display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:'1rem' }}>
          {[['5','Projects Built'],['13+','Technologies'],['1+','Years Coding'],['∞','Cups of Coffee']].map(([val, label], i) => (
            <div key={label} className={`anim-up d${i+1}`} style={{
              background:'white', borderRadius:20, padding:'2rem', textAlign:'center',
              border:'1px solid var(--green-pale)',
              transition:'all 0.2s',
            }}
            onMouseEnter={e=>{ e.currentTarget.style.borderColor='var(--green-light)'; e.currentTarget.style.transform='translateY(-4px)'; e.currentTarget.style.boxShadow='0 12px 32px rgba(74,140,74,0.10)' }}
            onMouseLeave={e=>{ e.currentTarget.style.borderColor='var(--green-pale)'; e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='none' }}>
              <div style={{ fontFamily:'Syne,sans-serif', fontWeight:800, fontSize:'2.5rem', color:'var(--green-soft)', letterSpacing:'-0.04em' }}>{val}</div>
              <div style={{ fontFamily:'JetBrains Mono,monospace', fontSize:'0.72rem', color:'var(--green-light)', textTransform:'uppercase', letterSpacing:'0.1em', marginTop:'0.4rem' }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding:'0 2rem 6rem' }}>
        <div style={{ maxWidth:1100, margin:'0 auto' }}>
          <h2 className="anim-up d1" style={{ fontFamily:'Syne,sans-serif', fontWeight:800, fontSize:'clamp(1.5rem,3vw,2.2rem)', color:'var(--green-deep)', letterSpacing:'-0.03em', marginBottom:'2.5rem' }}>
            Experience & Education
          </h2>
          <div style={{ display:'flex', flexDirection:'column', gap:'1rem' }}>
            {[
              { year:'2024 – Present', title:'Student', place:'Company / School Name', desc:'Royal universitfy of Phnom Penh.' },
              { year:'2023 – 2027', title:'Previous Role / Degree', place:'Company / University', desc:'ITE ( Information Technology Engineering)' },
              { year:'2025 – 2026', title:'Early Experience', place:'Place Name', desc:'I start building my first project with my friend  it called ( quiz game)' },
            ].map((item, i) => (
              <div key={i} className={`anim-up d${i+2}`} style={{
                background:'white', borderRadius:16, padding:'1.75rem 2rem',
                display:'flex', gap:'2rem', alignItems:'flex-start',
                border:'1px solid var(--green-pale)', transition:'all 0.2s',
              }}
              onMouseEnter={e=>{ e.currentTarget.style.borderColor='var(--green-light)'; e.currentTarget.style.transform='translateX(6px)' }}
              onMouseLeave={e=>{ e.currentTarget.style.borderColor='var(--green-pale)'; e.currentTarget.style.transform='translateX(0)' }}>
                <span style={{ fontFamily:'JetBrains Mono,monospace', fontSize:'0.7rem', color:'var(--green-light)', background:'var(--green-pale)', padding:'0.3rem 0.7rem', borderRadius:8, whiteSpace:'nowrap', marginTop:2, flexShrink:0 }}>{item.year}</span>
                <div>
                  <p style={{ fontFamily:'Syne,sans-serif', fontWeight:700, fontSize:'1rem', color:'var(--green-deep)' }}>{item.title}</p>
                  <p style={{ fontFamily:'Outfit,sans-serif', fontSize:'0.85rem', color:'var(--green-light)', marginBottom:'0.4rem' }}>{item.place}</p>
                  <p style={{ fontFamily:'Outfit,sans-serif', fontWeight:300, fontSize:'0.9rem', color:'var(--green-mid)', lineHeight:1.7 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background:'var(--green-deep)', padding:'3rem 2rem' }}>
        <div style={{ maxWidth:1100, margin:'0 auto', display:'flex', flexWrap:'wrap', alignItems:'center', justifyContent:'space-between', gap:'1rem' }}>
          <span style={{ fontFamily:'Syne,sans-serif', fontWeight:700, fontSize:'1rem', color:'white' }}>Tong dev</span>
          <span style={{ fontFamily:'JetBrains Mono,monospace', fontSize:'0.7rem', color:'rgba(255,255,255,0.35)' }}>© {new Date().getFullYear()} · Tong dev</span>
        </div>
      </footer>
    </main>
  )
}
