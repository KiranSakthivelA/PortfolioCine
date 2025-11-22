import Section from '../components/Section'

const ToolLogo = ({ type }) => {
  switch (type) {
    case 'premiere':
      return (
        <svg viewBox="0 0 64 64" role="img" aria-label="Premiere Pro logo">
          <defs>
            <linearGradient id="prGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3d1368" />
              <stop offset="60%" stopColor="#8e3cff" />
              <stop offset="100%" stopColor="#b782ff" />
            </linearGradient>
          </defs>
          <rect width="64" height="64" rx="16" fill="url(#prGrad)" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
          <text
            x="32"
            y="40"
            textAnchor="middle"
            fontFamily="Poppins, sans-serif"
            fontWeight="600"
            fontSize="28"
            fill="#f3ddff"
          >
            Pr
          </text>
        </svg>
      )
    case 'after-effects':
      return (
        <svg viewBox="0 0 64 64" role="img" aria-label="After Effects logo">
          <defs>
            <linearGradient id="aeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#19204d" />
              <stop offset="70%" stopColor="#5360ff" />
            </linearGradient>
          </defs>
          <rect width="64" height="64" rx="16" fill="url(#aeGrad)" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
          <text
            x="32"
            y="40"
            textAnchor="middle"
            fontFamily="Poppins, sans-serif"
            fontWeight="600"
            fontSize="28"
            fill="#c9d1ff"
          >
            Ae
          </text>
        </svg>
      )
    case 'photoshop':
      return (
        <svg viewBox="0 0 64 64" role="img" aria-label="Photoshop logo">
          <defs>
            <linearGradient id="psGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#031a2d" />
              <stop offset="80%" stopColor="#0aa7ff" />
            </linearGradient>
          </defs>
          <rect width="64" height="64" rx="16" fill="url(#psGrad)" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
          <text
            x="32"
            y="40"
            textAnchor="middle"
            fontFamily="Poppins, sans-serif"
            fontWeight="600"
            fontSize="28"
            fill="#8fe0ff"
          >
            Ps
          </text>
        </svg>
      )
    case 'resolve':
    default:
      return (
        <svg viewBox="0 0 64 64" role="img" aria-label="DaVinci Resolve logo">
          <defs>
            <linearGradient id="dvGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1a1a1a" />
              <stop offset="100%" stopColor="#2a2a2a" />
            </linearGradient>
          </defs>
          <rect width="64" height="64" rx="16" fill="url(#dvGrad)" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
          <circle cx="32" cy="24" r="7" fill="#2ad3a2" />
          <circle cx="22" cy="40" r="7" fill="#f8c15c" />
          <circle cx="42" cy="40" r="7" fill="#f57272" />
        </svg>
      )
  }
}

const software = [
  { label: 'Premiere Pro', type: 'premiere' },
  { label: 'After Effects', type: 'after-effects' },
  { label: 'Photoshop', type: 'photoshop' },
  { label: 'DaVinci Resolve', type: 'resolve' },
]

const Tools = () => (
  <Section
    id="tools"
    eyebrow="Tools & Software"
    title={
      <>
        <span className="gradient-text">Creative finish</span> toolkits.
      </>
    }
    description="Trusted tools from edit to final graded stories I deliver."
    align="center"
  >
    <div className="tools-grid">
      {software.map((tool) => (
        <article key={tool.label} className="tool-card" aria-label={tool.label}>
          <span className="tool-icon">
            <ToolLogo type={tool.type} />
          </span>
          <h3>{tool.label}</h3>
        </article>
      ))}
    </div>
  </Section>
)

export default Tools
