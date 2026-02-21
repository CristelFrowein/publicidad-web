import { FiMapPin } from 'react-icons/fi'
import { useState, useRef, useEffect } from 'react'

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  })

  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const numero = '5492230000000'

    const mensaje = `
Hola, quiero solicitar información:

Nombre: ${formData.nombre}
Email: ${formData.email}
Mensaje: ${formData.mensaje}
`

    const mensajeCodificado = encodeURIComponent(mensaje)

    window.open(
      `https://wa.me/${numero}?text=${mensajeCodificado}`,
      '_blank'
    )
  }

  return (
    <section
      ref={sectionRef}
      style={{
        width: '100%',
        padding: '120px 20px',
        background: '#ffffff',
        color: '#111',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0px)' : 'translateY(60px)',
        transition: 'all 0.9s ease',
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h2
          style={{
            textAlign: 'center',
            fontSize: '2.5rem',
            marginBottom: '60px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <FiMapPin size={26} color="#f1c40f" />
          Contacto
        </h2>
        <p
  style={{
    textAlign: 'center',
    maxWidth: '650px',
    margin: '0 auto 60px auto',
    fontSize: '1.1rem',
    lineHeight: '1.6',
    color: '#444',
  }}
>
  Hablemos de tu próximo proyecto,{' '}
  <span style={{ color: '#f1c40f', fontWeight: '600' }}>
    solicitá tu presupuesto sin compromiso.
  </span>
</p>
        <form
          onSubmit={handleSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '25px',
            background: '#fff',
            padding: '50px',
            borderRadius: '20px',
            boxShadow: '0 15px 40px rgba(0,0,0,0.08)',
          }}
        >
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <textarea
            name="mensaje"
            placeholder="Mensaje"
            rows="5"
            value={formData.mensaje}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <button
            type="submit"
            style={{
              padding: '16px',
              borderRadius: '12px',
              border: 'none',
              background: '#f1c40f',
              color: '#000',
              fontWeight: '600',
              cursor: 'pointer',
              fontSize: '1rem',
              transition: 'all 0.3s ease',
              boxShadow: '0 8px 20px rgba(241,196,15,0.4)',
            }}
            onMouseOver={(e) =>
              (e.target.style.transform = 'translateY(-3px)')
            }
            onMouseOut={(e) =>
              (e.target.style.transform = 'translateY(0)')
            }
          >
            Enviar por WhatsApp
          </button>
        </form>
      </div>
    </section>
  )
}

const inputStyle = {
  padding: '16px',
  borderRadius: '12px',
  border: '1px solid #ddd',
  background: '#fafafa',
  color: '#111',
  outline: 'none',
  fontSize: '1rem',
  transition: 'all 0.3s ease',
}

export default Contacto