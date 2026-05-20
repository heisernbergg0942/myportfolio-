// Using devicon CDN for pixel-perfect, official tech logos
const techs = [
  { name: 'React',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Vue.js',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { name: 'Node.js',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Laravel',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
  { name: 'PHP',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'MySQL',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Git',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'GitHub',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'Vercel',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg' },
  { name: 'Netlify',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg' },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
{ name: 'HTML5',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
{ name: 'CSS3',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
{ name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
{ name: 'React Router', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg' },
{ name: 'Vite',         icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg' },
{ name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg' },

]

export default function TechStack() {
  return (
    <section style={{ padding: '6rem 2rem', background: 'white' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Header */}
        <div className="anim-up d1" style={{ marginBottom: '3.5rem' }}>
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', color: 'var(--green-soft)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
            Technologies
          </span>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--green-deep)', marginTop: '0.4rem', letterSpacing: '-0.03em' }}>
            My Tech Stack
          </h2>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: '1rem' }}>
          {techs.map((tech, i) => (
            <div
              key={tech.name}
              className={`anim-scale d${Math.min(i % 6 + 1, 6)}`}
              style={{
                background: 'var(--green-mist)',
                border: '1px solid var(--green-pale)',
                borderRadius: 16,
                padding: '1.5rem 1rem',
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem',
                cursor: 'default',
                transition: 'transform 0.2s, box-shadow 0.2s, border-color 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(74,140,74,0.12)'
                e.currentTarget.style.borderColor = 'var(--green-light)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.borderColor = 'var(--green-pale)'
              }}
            >
              <img src={tech.icon} alt={tech.name} width={44} height={44} style={{ objectFit: 'contain' }} />
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.72rem', color: 'var(--green-mid)', fontWeight: 500, textAlign: 'center' }}>
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
