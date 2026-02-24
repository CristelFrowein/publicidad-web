import "./Proyectos.css"

function Proyectos() {

  const proyectos = [
    "https://res.cloudinary.com/dh5wgvaas/image/upload/v1771966607/b4ab338f-568f-451f-b571-e2ae310ad783.png",
    "https://res.cloudinary.com/dh5wgvaas/image/upload/v1771966686/93249e8a-718a-4588-9b4a-9e45bdea318d.png",
    "https://res.cloudinary.com/dh5wgvaas/image/upload/v1771966952/7156ace1-95f9-436e-a023-06529054eb82.png",
    "https://res.cloudinary.com/dh5wgvaas/image/upload/v1771966607/b4ab338f-568f-451f-b571-e2ae310ad783.png",
    "https://res.cloudinary.com/dh5wgvaas/image/upload/v1771966607/b4ab338f-568f-451f-b571-e2ae310ad783.png",
    "https://res.cloudinary.com/dh5wgvaas/image/upload/v1771966163/72622810-da53-419b-a0b8-1b88b3f7cafa.png",
    "https://res.cloudinary.com/dh5wgvaas/image/upload/v1771966716/eee599b9-1aca-4f44-85bb-6499275b2536.png",
    "https://res.cloudinary.com/dh5wgvaas/image/upload/v1771966607/b4ab338f-568f-451f-b571-e2ae310ad783.png",
  
  ]

  return (
    <section className="proyectos">
      <div className="proyectos__header">
        <h2>Ellos ya confiaron en nosotros</h2>
        <div className="linea"></div>
      </div>

      <div className="proyectos__grid">
        {proyectos.map((img, index) => (
          <div 
            key={index} 
            className="proyecto__card"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <img src={img} alt={`Proyecto ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Proyectos