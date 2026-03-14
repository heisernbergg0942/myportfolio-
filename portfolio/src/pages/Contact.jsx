import { useState } from 'react'

// ── EDIT THESE ──────────────────────────────────────────────
const YOUR_EMAIL = 'suytongleng@gmail.com'
const GITHUB_URL = 'https://github.com/heisernbergg0942'
// ────────────────────────────────────────────────────────────

export default function Contact() {
  const [form, setForm] = useState({ name:'', email:'', message:'' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`)
    const body    = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`)
    window.location.href = `mailto:${YOUR_EMAIL}?subject=${subject}&body=${body}`
    setSent(true)
    setForm({ name:'', email:'', message:'' })
    setTimeout(() => setSent(false), 4000)
  }

  const inputStyle = {
    width:'100%', padding:'0.9rem 1.1rem', borderRadius:12,
    border:'1px solid var(--green-pale)', background:'var(--green-mist)',
    fontFamily:'Outfit,sans-serif', fontSize:'0.95rem', color:'var(--green-deep)',
    outline:'none', transition:'border-color 0.2s',
  }

  return (
    <main style={{ minHeight:'100vh', paddingTop:72, background:'var(--green-mist)' }}>
      {/* Header */}
      <section style={{ padding:'5rem 2rem 4rem', background:'white', borderBottom:'1px solid var(--green-pale)' }}>
        <div style={{ maxWidth:1100, margin:'0 auto' }}>
          <p className="anim-up d1" style={{ fontFamily:'JetBrains Mono,monospace', fontSize:'0.75rem', color:'var(--green-soft)', textTransform:'uppercase', letterSpacing:'0.15em', marginBottom:'1rem' }}>
            Contact
          </p>
          <h1 className="anim-up d2" style={{ fontFamily:'Syne,sans-serif', fontWeight:800, fontSize:'clamp(3rem,7vw,5rem)', color:'var(--green-deep)', letterSpacing:'-0.04em', lineHeight:0.95 }}>
            Let's work<br/><span style={{ color:'var(--green-soft)' }}>together.</span>
          </h1>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding:'5rem 2rem', maxWidth:1100, margin:'0 auto', display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:'3rem', alignItems:'start' }}>
        {/* Info */}
        <div className="anim-up d2" style={{ display:'flex', flexDirection:'column', gap:'1.25rem' }}>
          <p style={{ fontFamily:'Outfit,sans-serif', fontWeight:300, fontSize:'1rem', color:'var(--green-mid)', lineHeight:1.8, marginBottom:'0.5rem' }}>
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
          {[
            { icon:'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', label:'Email', value: YOUR_EMAIL, href:`mailto:${YOUR_EMAIL}` },
            { label:'GitHub', value:'@heisernbergg0942', href: 'https://github.com/heisernbergg0942' , isGithub: true },
            { icon:'M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z', label:'Location', value:'Phnom penh, Cambodia', href: null },
          ].map((item) => (
            <div key={item.label} style={{ background:'white', borderRadius:16, padding:'1.25rem 1.5rem', display:'flex', gap:'1rem', alignItems:'center', border:'1px solid var(--green-pale)', transition:'all 0.2s' }}
              onMouseEnter={e=>{ e.currentTarget.style.borderColor='var(--green-light)'; e.currentTarget.style.transform='translateX(4px)' }}
              onMouseLeave={e=>{ e.currentTarget.style.borderColor='var(--green-pale)'; e.currentTarget.style.transform='translateX(0)' }}>
              <div style={{ width:40, height:40, borderRadius:12, background:'var(--green-pale)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                {item.isGithub ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--green-soft)">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                ) : (
                  <svg width="18" height="18" fill="none" stroke="var(--green-soft)" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon}/>
                  </svg>
                )}
              </div>
              <div>
                <p style={{ fontFamily:'JetBrains Mono,monospace', fontSize:'0.68rem', color:'var(--green-light)', textTransform:'uppercase', letterSpacing:'0.1em' }}>{item.label}</p>
                {item.href ? (
                  <a href={item.href} target={item.isGithub ? '_blank' : '_self'} rel="noopener noreferrer"
                    style={{ fontFamily:'Outfit,sans-serif', fontSize:'0.9rem', color:'var(--green-deep)', textDecoration:'none', fontWeight:500 }}>
                    {item.value}
                  </a>
                ) : (
                  <p style={{ fontFamily:'Outfit,sans-serif', fontSize:'0.9rem', color:'var(--green-deep)', fontWeight:500 }}>{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="anim-up d3">
          <div style={{ background:'white', borderRadius:20, padding:'2.5rem', border:'1px solid var(--green-pale)', boxShadow:'0 8px 32px rgba(26,58,26,0.06)' }}>
            {sent ? (
              <div style={{ textAlign:'center', padding:'3rem 1rem' }}>
                <div style={{ width:56, height:56, borderRadius:'50%', background:'var(--green-pale)', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 1rem' }}>
                  <svg width="24" height="24" fill="none" stroke="var(--green-soft)" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <h3 style={{ fontFamily:'Syne,sans-serif', fontWeight:700, fontSize:'1.2rem', color:'var(--green-deep)' }}>Email client opened!</h3>
                <p style={{ fontFamily:'Outfit,sans-serif', fontSize:'0.9rem', color:'var(--green-mid)', marginTop:'0.5rem' }}>Please send the message from your email app.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display:'flex', flexDirection:'column', gap:'1.25rem' }}>
                {[
                  { label:'Name', name:'name', type:'text', placeholder:'Your name' },
                  { label:'Email', name:'email', type:'email', placeholder:'your@email.com' },
                ].map(f => (
                  <div key={f.name}>
                    <label style={{ fontFamily:'JetBrains Mono,monospace', fontSize:'0.7rem', color:'var(--green-soft)', textTransform:'uppercase', letterSpacing:'0.1em', display:'block', marginBottom:'0.5rem' }}>{f.label}</label>
                    <input type={f.type} name={f.name} value={form[f.name]} placeholder={f.placeholder} required
                      onChange={e => setForm({...form, [e.target.name]: e.target.value})}
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = 'var(--green-soft)'}
                      onBlur={e => e.target.style.borderColor = 'var(--green-pale)'}
                    />
                  </div>
                ))}
                <div>
                  <label style={{ fontFamily:'JetBrains Mono,monospace', fontSize:'0.7rem', color:'var(--green-soft)', textTransform:'uppercase', letterSpacing:'0.1em', display:'block', marginBottom:'0.5rem' }}>Message</label>
                  <textarea name="message" rows={5} placeholder="Tell me about your project..." required
                    value={form.message}
                    onChange={e => setForm({...form, message: e.target.value})}
                    style={{ ...inputStyle, resize:'vertical' }}
                    onFocus={e => e.target.style.borderColor = 'var(--green-soft)'}
                    onBlur={e => e.target.style.borderColor = 'var(--green-pale)'}
                  />
                </div>
                <button type="submit" style={{
                  fontFamily:'Outfit,sans-serif', fontWeight:600, fontSize:'0.95rem',
                  color:'white', background:'var(--green-deep)', border:'none',
                  padding:'0.95rem', borderRadius:12, cursor:'pointer', transition:'all 0.2s',
                  display:'flex', alignItems:'center', justifyContent:'center', gap:'0.5rem',
                }}
                onMouseEnter={e=>{ e.currentTarget.style.background='var(--green-soft)'; e.currentTarget.style.transform='translateY(-2px)' }}
                onMouseLeave={e=>{ e.currentTarget.style.background='var(--green-deep)'; e.currentTarget.style.transform='translateY(0)' }}>
                  <svg width="16" height="16" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                  </svg>
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <footer style={{ background:'var(--green-deep)', padding:'3rem 2rem' }}>
        <div style={{ maxWidth:1100, margin:'0 auto', display:'flex', flexWrap:'wrap', alignItems:'center', justifyContent:'space-between', gap:'1rem' }}>
          <span style={{ fontFamily:'Syne,sans-serif', fontWeight:700, fontSize:'1rem', color:'white' }}>Tong dev</span>
          <span style={{ fontFamily:'JetBrains Mono,monospace', fontSize:'0.7rem', color:'rgba(255,255,255,0.35)' }}>© {new Date().getFullYear()} · Tong dev</span>
        </div>
      </footer>
    </main>
  )
}
