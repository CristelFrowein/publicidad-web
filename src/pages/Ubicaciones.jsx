import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import zonas from "../data/zonas";
import "./Ubicaciones.css";

function Ubicaciones() {
  const navigate = useNavigate();
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.dataset.index;
            entry.target.style.transitionDelay = `${index * 120}ms`;
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="ubicaciones">
      <div className="ubicaciones__container">
        <h2 className="ubicaciones__title">Zonas Disponibles</h2>

        <div className="ubicaciones__grid">
          {zonas.map((zona, index) => (
            <div
              key={zona.slug}
              ref={(el) => (cardsRef.current[index] = el)}
              data-index={index}
              className="ubicaciones__card"
              onClick={() => navigate(`/ubicaciones/${zona.slug}`)}
            >
              {zona.fotos && zona.fotos.length > 0 && (
                <img
                  src={zona.fotos[0].url}
                  alt={zona.nombre}
                  className="ubicaciones__img"
                />
              )}

              <div className="ubicaciones__info">
                <h3>{zona.nombre}</h3>
                <p>{zona.direccion}</p>
                <span className="ubicaciones__verMas">
                  Ver ubicación →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Ubicaciones;