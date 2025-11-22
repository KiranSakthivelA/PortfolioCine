import Section from '../components/Section'

const Contact = () => (
  <Section
    id="contact"
    eyebrow="Contact"
    title={
      <>
        Let’s <span className="gradient-text">collaborate</span>
      </>
    }
    description="Share a script, treatment, or even a moodboard. I respond within 24 hours."
    align="center"
    compact
  >
    <div className="contact-card">
      <div>
        <p className="label">Email</p>
        <a href="mailto:kiransakthivela@gmail.com">kiransakthivela@gmail.com</a>
      </div>
      <div>
        <p className="label">Phone / WhatsApp</p>
        <a href="tel:+919442173548">+91 94421 73548</a>
      </div>
      <div>
        <p className="label">Based in</p>
        <a href="#contact">Coimbatore · Open for travel worldwide</a>
      </div>
    </div>
  </Section>
)

export default Contact

