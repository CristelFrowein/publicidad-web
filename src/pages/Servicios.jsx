import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import { useState, useEffect } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { FiMapPin } from 'react-icons/fi'


// Fix icon default (Vite bug)
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl:
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl:
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
})

// 5 ubicaciones random Mar del Plata (boceto)
const ubicaciones = [
  {
    id: 1,
    nombre: 'Av. Colón y Güemes',
    position: [-38.0055, -57.5426],
  },
  {
    id: 2,
    nombre: 'Av. Luro y San Luis',
    position: [-37.9992, -57.5485],
  },
  {
    id: 3,
    nombre: 'Juan B. Justo y Champagnat',
    position: [-38.0169, -57.5733],
  },
  {
    id: 4,
    nombre: 'Constitución y Tejedor',
    position: [-37.9647, -57.5474],
  },
  {
    id: 5,
    nombre: 'Edison y Mario Bravo',
    position: [-38.0351, -57.5568],
  },
]

// Componente para mover el mapa suavemente
function FlyToLocation({ position }) {
  const map = useMap()

  useEffect(() => {
    if (position) {
      map.flyTo(position, 16, {
        duration: 1.5,
      })
    }
  }, [position, map])

  return null
}

function Servicios() {
  const [activeLocation, setActiveLocation] = useState(null)

  return (
    <section
      style={{
        width: '100%',
        padding: '80px 20px',
        background: '#fff',
        color: '#0f0f0f',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
    <h2
  style={{
    textAlign: 'center',
    gap: '12px',
    fontSize: '2.5rem',
    marginBottom: '50px',
  }}
>
  Ubicaciones disponibles
</h2>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '40px',
          }}
        >
          {/* LISTADO */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
              gap: '15px',
            }}
          >
            {ubicaciones.map((ubicacion) => (
  <div
    key={ubicacion.id}
    onClick={() => setActiveLocation(ubicacion)}
    style={{
      padding: '15px 20px',
      borderRadius: '12px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
      background:
        activeLocation?.id === ubicacion.id
          ? '#0f0f0f'
          : '#1c1c1c',
      color:
        activeLocation?.id === ubicacion.id
          ? '#f1c40f'
          : '#fff',
      transition: 'all 0.3s ease',
    }}
  >
    <FiMapPin size={18} style={{ opacity: 0.8 }} />
    <span>{ubicacion.nombre}</span>
  </div>
))}

          </div>

          {/* MAPA */}
          <div
            style={{
              width: '100%',
              height: '500px',
              borderRadius: '20px',
              overflow: 'hidden',
            }}
          >
            <MapContainer
              center={[-38.0055, -57.5426]}
              zoom={13}
              scrollWheelZoom={false}
              style={{ width: '100%', height: '100%' }}
            >
              <TileLayer
                attribution="&copy; OpenStreetMap contributors"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {activeLocation && (
                <FlyToLocation position={activeLocation.position} />
              )}

              {ubicaciones.map((ubicacion) => (
                <Marker
                  key={ubicacion.id}
                  position={ubicacion.position}
                  eventHandlers={{
                    click: () => setActiveLocation(ubicacion),
                  }}
                >
                  <Popup>
                    <strong>{ubicacion.nombre}</strong>
                    <br />
                    Espacio disponible para cartel.
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Servicios
