import { Link } from "react-router-dom"
import { useState } from "react"
import "./Navbar.css"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar__logo">
      <span className="logo__main">GRAZIANI</span>
      <span className="logo__sub">V Í A  P Ú B L I C A</span>
      </div>

      <div 
        className={`navbar__hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`navbar__links ${menuOpen ? "active" : ""}`}>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/servicios">Ubicaciones</Link></li>
        <li><Link to="/proyectos">Proyectos</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
