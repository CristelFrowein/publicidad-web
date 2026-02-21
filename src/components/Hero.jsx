import { useState, useEffect } from "react"
import "./Hero.css"

const images = [
  "https://res.cloudinary.com/dh5wgvaas/image/upload/v1771196334/3_cmfjkj.png",
  "https://res.cloudinary.com/dh5wgvaas/image/upload/v1771196334/1_rarfmk.png",
  "https://res.cloudinary.com/dh5wgvaas/image/upload/v1771196334/2_crapbh.png"
]

function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="hero">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="Publicidad exterior"
          className={`hero__image ${index === current ? "active" : ""}`}
        />
      ))}

      <div className="hero__overlay">
        <div className="hero__content">
          <h1 className="hero__title">
        <span className="hero__line1">No ocupamos espacios.</span>
      <span className="hero__line2">Construimos visibilidad.</span>
      </h1>

          <p>
            Especialistas en publicidad exterior y cerramientos.
          </p>
          <button className="hero__btn">
            Solicitar presupuesto
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
