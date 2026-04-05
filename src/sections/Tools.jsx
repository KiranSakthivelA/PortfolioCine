import Section from '../components/Section'

const ToolLogo = ({ type }) => {
  const shadowId = `shadow-${type}`;
  
  return (
    <svg viewBox="0 0 64 64" role="img" className="tool-svg">
      <defs>
        {/* Drop shadow filter for text */}
        <filter id={shadowId} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="1.5" />
          <feOffset dx="0" dy="1" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.5" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {type === 'premiere' && (
          <linearGradient id="prGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3d1368" />
            <stop offset="100%" stopColor="#8e3cff" />
          </linearGradient>
        )}
        {type === 'after-effects' && (
          <linearGradient id="aeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#19204d" />
            <stop offset="100%" stopColor="#5360ff" />
          </linearGradient>
        )}
        {type === 'photoshop' && (
          <linearGradient id="psGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#031a2d" />
            <stop offset="100%" stopColor="#0aa7ff" />
          </linearGradient>
        )}
        {(type === 'resolve' || !['premiere', 'after-effects', 'photoshop'].includes(type)) && (
          <linearGradient id="dvGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1a1a1a" />
            <stop offset="100%" stopColor="#2a2a2a" />
          </linearGradient>
        )}
      </defs>

      {type === 'premiere' && (
        <>
          <rect width="64" height="64" rx="14" fill="url(#prGrad)" />
          <text x="32" y="32" textAnchor="middle" dominantBaseline="central" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="26" fill="#f3ddff" filter={`url(#${shadowId})`}>Pr</text>
        </>
      )}
      {type === 'after-effects' && (
        <>
          <rect width="64" height="64" rx="14" fill="url(#aeGrad)" />
          <text x="32" y="32" textAnchor="middle" dominantBaseline="central" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="26" fill="#c9d1ff" filter={`url(#${shadowId})`}>Ae</text>
        </>
      )}
      {type === 'photoshop' && (
        <>
          <rect width="64" height="64" rx="14" fill="url(#psGrad)" />
          <text x="32" y="32" textAnchor="middle" dominantBaseline="central" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="26" fill="#8fe0ff" filter={`url(#${shadowId})`}>Ps</text>
        </>
      )}
      {(type === 'resolve' || !['premiere', 'after-effects', 'photoshop'].includes(type)) && (
        <>
          <rect width="64" height="64" rx="14" fill="url(#dvGrad)" />
          <circle cx="32" cy="24" r="7" fill="#2ad3a2" />
          <circle cx="22" cy="40" r="7" fill="#f8c15c" />
          <circle cx="42" cy="40" r="7" fill="#f57272" />
        </>
      )}
    </svg>
  );
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
