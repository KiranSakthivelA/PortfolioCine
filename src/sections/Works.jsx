import Section from '../components/Section'

const works = [
  {
    id: 'Qms-LQLbTBk',
    title: 'Kanavil Varum Kaadhali',
    role: 'Short film',
    url: 'https://youtu.be/Qms-LQLbTBk?si=NY63jGgH0rRGTTuw',
  },
  {
    id: 'gU92BZp9ToU',
    title: 'Candy',
    role: 'Short film',
    url: 'https://youtu.be/gU92BZp9ToU?si=bMr6LP47Az-Q-fAG',
  },
  {
    id: 'xH-UMarry5U',
    title: 'SAMBAVAM',
    role: 'Short film',
    url: 'https://youtu.be/xH-UMarry5U?si=NTqrYISBNEe6KcE1',
  },
  {
    id: 'LZIhYLJlVeA',
    title: 'Shape Your Future with SRIT',
    role: 'Commercial',
    url: 'https://youtu.be/LZIhYLJlVeA?si=tSPOh752qrlR5Pf7',
  },
]

const Works = () => (
  <Section
    id="works"
    eyebrow="Selected Works"
    title={
      <>
        Films & stories delivered with{' '}
        <span className="gradient-text">restraint and power.</span>
      </>
    }
    description="Swipe through for a sampling. Scroll to view extra scenes, tap to watch in full now."
  >
    <div className="works-carousel">
      {works.map((work) => (
        <article key={work.id} className="work-card">
          <div className="card-glow" />
          <img
            src={`https://img.youtube.com/vi/${work.id}/hqdefault.jpg`}
            alt={`${work.title} thumbnail`}
            loading="lazy"
          />
          <div className="card-body">
            <p className="eyebrow">{work.role}</p>
            <h3>{work.title}</h3>
            <a className="ghost-button" href={work.url} target="_blank" rel="noreferrer">
              Watch Now
            </a>
          </div>
        </article>
      ))}
    </div>
  </Section>
)

export default Works



