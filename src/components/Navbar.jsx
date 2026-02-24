import { Link } from "react-router-dom"
import { useState } from "react"
import "./Navbar.css"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
    <Link to="/" className="navbar__logo">
  <img src="/logo.png" alt="Graziani Vía Pública" className="navbar__logo-img" />
</Link>
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
        <li><Link to="/Ubicaciones">Ubicaciones</Link></li>
        <li><Link to="/proyectos">Proyectos</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
