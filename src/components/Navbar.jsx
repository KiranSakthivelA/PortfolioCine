import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#showreel', label: 'Showreel' },
  { href: '#tools', label: 'Tools' },
  { href: '#works', label: 'Works' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

const NavLink = ({ href, label, onClick }) => (
  <a className="nav-link" href={href} onClick={onClick}>
    {label}
  </a>
)

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open')
    } else {
      document.body.classList.remove('menu-open')
    }

    return () => {
      document.body.classList.remove('menu-open')
    }
  }, [isMenuOpen])

  return (
    <header className="nav-shell">
      <button className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
        <span className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>

      <a className="brand-mark" href="#home">
        <p className="brand-name">Kiran Sakthivel A</p>
        <small>
          <i>DoP · DI Colorist · Editor</i>
        </small>
      </a>

      <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        {navLinks.map((item) => (
          <NavLink key={item.href} {...item} onClick={closeMenu} />
        ))}
      </nav>

      <a className="ghost-button nav-cta" href="mailto:kiransakthivela@gmail.com">
        Let's Collab
      </a>
    </header>
  )
}

export default Navbar
