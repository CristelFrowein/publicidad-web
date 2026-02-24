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
        background: '#000',
        color: '#fff',
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
            marginBottom: '30px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '12px',
            fontWeight: '700',
            letterSpacing: '1px'
          }}
        >
          <FiMapPin size={28} color="#99123e" />
          Contacto
        </h2>

        <p
          style={{
            textAlign: 'center',
            maxWidth: '650px',
            margin: '0 auto 60px auto',
            fontSize: '1.1rem',
            lineHeight: '1.7',
            color: '#ccc',
          }}
        >
          Hablemos de tu próximo proyecto,{' '}
          <span style={{ color: '#99123e', fontWeight: '600' }}>
            solicitá tu presupuesto sin compromiso.
          </span>
        </p>

        <form
          onSubmit={handleSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '25px',
            background: '#111',
            padding: '50px',
            borderRadius: '20px',
            border: '1px solid #222',
            boxShadow: '0 15px 40px rgba(0,0,0,0.6)',
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
            style={buttonStyle}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-4px)'
              e.target.style.boxShadow = '0 15px 30px rgba(153,18,62,0.4)'
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)'
              e.target.style.boxShadow = '0 8px 20px rgba(153,18,62,0.3)'
            }}
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
  border: '1px solid #222',
  background: '#000',
  color: '#fff',
  outline: 'none',
  fontSize: '1rem',
  transition: 'all 0.3s ease',
}

const buttonStyle = {
  padding: '16px',
  borderRadius: '12px',
  border: 'none',
  background: '#99123e',
  color: '#fff',
  fontWeight: '600',
  cursor: 'pointer',
  fontSize: '1rem',
  transition: 'all 0.3s ease',
  boxShadow: '0 8px 20px rgba(153,18,62,0.3)',
}

export default Contacto