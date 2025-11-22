import heroPortrait from '../assets/kiran-hero.jpg'

const Hero = () => (
  <section id="home" className="hero">
    <div className="hero-glass">
      <div className="hero-text">
        <p className="eyebrow">
          <em>Director of Photography · DI Colorist · Editor</em>
        </p>
        <h1>
          <em>Cinematic precision</em> for <span className="gradient-text">brands, films, and bold storytellers.</span>
        </h1>
        <p className="section-description hero-lede">
          I'm <em>Kiran Sakthivel A</em> — a Coimbatore-based Cinematographer,
          DI Colorist and Editor. Over 6 years, I've shaped emotive imagery for{' '}
          <em>short films, pilots, commercials, and weddings</em>, merging
          narrative intent with crafted mastery of light, color and rhythm to
          enhance all frames.
        </p>
        <div className="hero-actions">
          <a className="primary-button" href="#showreel">
            Watch Showreel
          </a>
          <a className="secondary-button" href="tel:+919442173548">
            Contact Now
          </a>
        </div>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <div className="portrait-frame">
          <img
            src={heroPortrait}
            alt="Kiran Sakthivel A portrait"
            className="hero-portrait"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
)

export default Hero

