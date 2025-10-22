import './contenido.css'

function Contenido() {
    return (
       <section className="features" id="caracteristicas">
  <div className="container">
    <h3>Características</h3>
    <div className="feature-list">
      
      <div className="feature">
        <h4>Actualizado</h4>
        <p>Contiene información sobre los últimos estrenos, tráilers y noticias del mundo del cine.</p>
      </div>

      <div className="feature">
        <h4>Organizado</h4>
        <p>Las películas están clasificadas por género, año y popularidad para una búsqueda más fácil.</p>
      </div>


      <div className="feature">
        <h4>Visual y atractivo</h4>
        <p>Diseño moderno con imágenes de alta calidad y una interfaz inspirada en plataformas de streaming.</p>
      </div>
    

    </div>
  </div>
</section>

    )
}

export default Contenido;