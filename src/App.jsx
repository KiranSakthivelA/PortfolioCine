import './App.css'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Showreel from './sections/Showreel'
import Tools from './sections/Tools'
import Works from './sections/Works'
import About from './sections/About'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

function App() {
  return (
    <div className="page-shell">
      <div className="orb orb-one" aria-hidden="true" />
      <div className="orb orb-two" aria-hidden="true" />

      <Navbar />
      <main>
        <Hero />
        <Showreel />
        <Tools />
        <Works />
        <About />
        <Contact />
      </main>
      <Footer />
      </div>
  )
}

export default App
