const Footer = () => (
  <footer className="footer">
    <div className="footer-gradient" aria-hidden="true" />
    <div className="footer-top">
      <div>
        <p className="eyebrow">Portfolio 2025</p>
        <h3>Minimal frames, maximal emotion.</h3>
      </div>
      <a className="primary-button" href="mailto:kiransakthivela@gmail.com">
        Share a brief
      </a>
    </div>
    <div className="footer-columns">
      <div>
        <p>Kiran Sakthivel A</p>
        <small>DoP · DI Colorist · Editor</small>
      </div>
      <div>
        <p className="label">Navigation</p>
        <a href="#home">Home</a>
        <a href="#showreel">Showreel</a>
        <a href="#tools">Tools</a>
        <a href="#works">Works</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
    <div className="footer-bottom">
      <p>© {new Date().getFullYear()} Kiran Sakthivel A. All rights reserved.</p>
    </div>
  </footer>
)

export default Footer

