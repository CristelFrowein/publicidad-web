import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import zonas from "../data/zonas";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./DetalleZona.css";

function DetalleZona() {
  const { slug } = useParams();
  const zona = zonas.find((z) => z.slug === slug);

  const [indexActual, setIndexActual] = useState(0);

  // Carrusel automático
useEffect(() => {
  if (!zona?.fotos || zona.fotos.length <= 1) return;

  const intervalo = setInterval(() => {
    setIndexActual((prev) => 
      (prev + 1) % zona.fotos.length
    );
  }, 4000);

  return () => clearInterval(intervalo);
}, [slug]);


  const mensaje = `Hola Graziani, quiero consultar sobre esta ubicación: ${zona.nombre}`;
  const fotoActual = zona.fotos[indexActual];

  return (
    <section className="detalleZona">
      <div className="detalleZona__container">

        <h2 className="detalleZona__title">{zona.nombre}</h2>
        <p className="detalleZona__direccion">{zona.direccion}</p>

        {/* REFERENCIAS + CARRUSEL */}
        <div className="detalleZona__referenciasContainer">

          <div className="detalleZona__carousel">
            <img
              src={fotoActual.url}
              alt={zona.nombre}
              className={`detalleZona__img detalleZona__img--${fotoActual.orientacion}`}
            />
          </div>

          <div className="detalleZona__referenciasBox">
            <h4 className="detalleZona__subtitle">Referencias</h4>
            <ul className="detalleZona__referencias">
              {zona.referencias.map((ref, i) => (
                <li key={i}>{ref}</li>
              ))}
            </ul>
            {/* INFO */}
<div className="detalleZona__info">
  <p><strong>Medidas:</strong> {zona.medidas}</p>
  <p><strong>Formato:</strong> {zona.formato}</p>
</div>
          </div>

        </div>

        

        {/* MAPA */}
        <div className="detalleZona__map-container">
          <div className="detalleZona__map">
            <MapContainer center={zona.geo} zoom={16}>
              <TileLayer
                attribution="&copy; OpenStreetMap contributors"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={zona.geo} />
            </MapContainer>
          </div>
        </div>

        {/* BOTÓN */}
        <a
          href={`https://wa.me/542234265455?text=${encodeURIComponent(mensaje)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="detalleZona__btn"
        >
          Consultar por WhatsApp
        </a>

      </div>
    </section>
  );
}

export default DetalleZona;