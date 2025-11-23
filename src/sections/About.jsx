import Section from '../components/Section'
import aboutPortrait from '../assets/kiran-about.jpg'

const ethos = [
  {
    title: 'Director of Photography',
    copy: 'Cinematic tension shaped through crafted light across faces, objects and spaces.',
  },
  {
    title: 'DI Colorist',
    copy: 'Emotive color guided by story using efficient refined modern grading workflows.',
  },
  {
    title: 'Editor',
    copy: 'Rhythmic edits and crafted pacing that guide emotion and drive each story beat.',
  },
]

const About = () => (
  <Section
    id="about"
    eyebrow="About"
    title={<span className="gradient-text">Kiran Sakthivel A</span>}
    description="A DoP, DI Colorist, and Editor from Coimbatore creating narrative-driven works across short films, commercials, and weddings — merging lighting, color, and rhythm to produce cinematic storytelling."
  >
    <div className="about-grid about-with-photo">
      <div className="about-photo">
        <img src={aboutPortrait} alt="Kiran Sakthivel A on set" loading="lazy" />
      </div>
      <div className="about-ethos">
        {ethos.map((item) => (
          <article key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.copy}</p>
          </article>
        ))}
      </div>
    </div>
  </Section>
)

export default About

