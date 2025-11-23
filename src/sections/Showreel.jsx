import Section from '../components/Section'

const Showreel = () => (
  <Section
    id="showreel"
    eyebrow="Showreel 2025"
    title={
      <>
        <span className="gradient-text">Bold contrast.</span> Fluid edits.
        Story-driven frames.
      </>
    }
    description="Primary reel featuring short films, pilots, commercials, weddings, shot and produced pure emotion."
    align="center"
  >
    <div className="reel-shell">
      <div className="reel-gradient" />
      <iframe
        src="https://player.vimeo.com/video/1085331478?h=0908c354c2"
        title="Kiran Sakthivel Showreel"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      />
    </div>
  </Section>
)

export default Showreel



