import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import Ubicaciones from "./pages/Ubicaciones"
import Proyectos from "./pages/Proyectos"
import Contacto from "./pages/Contacto"

import DetalleZona from "./pages/DetalleZona"

import 'leaflet/dist/leaflet.css';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ubicaciones" element={<Ubicaciones />} />
<Route path="/ubicaciones/:slug" element={<DetalleZona />} />
        <Route path="/Proyectos" element={<Proyectos />} />
        <Route path="/Contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
