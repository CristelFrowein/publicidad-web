import { useEffect, useRef, useState } from "react"
import "./About.css"

const images = [
  "https://res.cloudinary.com/dh5wgvaas/image/upload/v1771888254/8a2db468-2291-47d8-9995-6a659e908ddf.png",
  "https://res.cloudinary.com/dh5wgvaas/image/upload/v1771966163/72622810-da53-419b-a0b8-1b88b3f7cafa.png",
  "https://res.cloudinary.com/dh5wgvaas/image/upload/v1771966410/7477abb0-88c6-4d9a-902c-51cc0035ec1e.png",
  "https://res.cloudinary.com/dh5wgvaas/image/upload/v1771966564/6df1a388-3c29-4e76-8589-6cf6db101fd6.png",
]

function About() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [current, setCurrent] = useState(0)
  const [prev, setPrev] = useState(null)

  // Fade al hacer scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  // Loop automático con control de slide anterior
  useEffect(() => {
    const interval = setInterval(() => {
      setPrev(current)
      setCurrent((prevIndex) => (prevIndex + 1) % images.length)
    }, 3500)

    return () => clearInterval(interval)
  }, [current])

  return (
    <section
      ref={sectionRef}
      className={`about ${isVisible ? "about--visible" : ""}`}
    >
      <div className="about__container">
        <div className="about__text">
          <h2>Sobre Nosotros</h2>
          <p>
            Somos especialistas en cartelería exterior y cerramientos
            industriales y comerciales.
          </p>
          <p>
            Diseñamos, fabricamos e instalamos estructuras que garantizan
            visibilidad, resistencia y durabilidad.
          </p>
          <button className="about__btn">
            Solicitar presupuesto
          </button>
        </div>

        <div className="about__image">
          {images.map((img, index) => {
            let className = "about__slide"

            if (index === current) className += " active"
            if (index === prev) className += " prev"

            return (
              <img
                key={index}
                src={img}
                alt="Proyecto realizado"
                className={className}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default About
