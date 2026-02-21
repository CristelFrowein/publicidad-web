import { useEffect, useRef, useState } from "react"
import "./About.css"

const images = [
  "https://res.cloudinary.com/dh5wgvaas/image/upload/v1771221127/4_ri2lnw.png",
  "https://res.cloudinary.com/dh5wgvaas/image/upload/v1771221129/5_hsntq5.png",
  "https://res.cloudinary.com/dh5wgvaas/image/upload/v1771221128/6_vzmbcv.png",
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
