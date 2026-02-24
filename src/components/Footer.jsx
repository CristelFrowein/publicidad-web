import { FaWhatsapp, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import styles from "./Footer.module.css";

function Footer() {

  const mensaje = encodeURIComponent(
    "Hola! Vengo desde la web de Graziani Vía Pública y me interesa una ubicación."
  );

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* Identidad */}
        <div className={styles.brand}>
          <h3>GRAZIANI</h3>
          <span>V Í A P Ú B L I C A</span>
        </div>

        {/* Contacto */}
        <div className={styles.info}>

          <a
            href={`https://wa.me/542234265455?text=${mensaje}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.item}
          >
            <FaWhatsapp />
            <span>0223 4265455</span>
          </a>

          <div className={styles.item}>
            <FaMapMarkerAlt />
            <span>Chile 1175, Mar del Plata, Buenos Aires</span>
          </div>

          <a
            href="mailto:tanograziani65@gmail.com"
            className={styles.item}
          >
            <FaEnvelope />
            <span>tanograziani65@gmail.com</span>
          </a>

        </div>

      </div>

      <div className={styles.bottom}>
        © {new Date().getFullYear()} Graziani. Todos los derechos reservados.
      </div>
    </footer>
  );
}

export default Footer;