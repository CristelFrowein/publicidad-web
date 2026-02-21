import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Servicios from "./pages/Servicios"
import Proyectos from "./pages/Proyectos"
import Contacto from "./pages/Contacto"
import 'leaflet/dist/leaflet.css';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Servicios" element={<Servicios />} />
        <Route path="/Proyectos" element={<Proyectos />} />
        <Route path="/Contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
