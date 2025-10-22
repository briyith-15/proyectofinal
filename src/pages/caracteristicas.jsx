import './lugares.css'

function Lugares() {
    return(
        <section className="features" id="lugares">
            <div className="container">
                <h3>Lugares Destacados</h3>
                <div className="feature-list">
                    
                    <div className="feature">
                        <img src="./public/cineplanet.jpg" alt="" />
                        <h4>Cineplanet</h4>
                        <p>Una de las cadenas más grandes del Perú, con salas modernas, sonido envolvente y estrenos internacionales en todo el país.</p>
                    </div>

                    <div className="feature">
                        <img src="./public/cinemark.jpg" alt="" />
                        <h4>Cinemark</h4>
                        <p>Reconocido por su excelente calidad de imagen y sonido, además de ofrecer cómodas butacas y una experiencia premium.</p>
                    </div>

                    <div className="feature">
                        <img src="./public/cinepolis.jpg" alt="" />
                        <h4>Cinépolis</h4>
                        <p>Cadena internacional presente en Lima, destacada por sus salas VIP, servicio personalizado y amplia cartelera.</p>
                    </div>

                    <div className="feature">
                        <img src="./public/UVK-multicines.png" alt="" />
                        <h4>UVK Multicines</h4>
                        <p>Empresa peruana con cines en varias ciudades, que combina estrenos comerciales con cine independiente y nacional.</p>
                    </div>

                    <div className="feature">
                        <img src="./public/cinerama.jpg" alt="" />
                        <h4>Cinerama</h4>
                        <p>Un clásico del cine peruano, famoso por su ubicación en el centro de Lima y por proyectar películas de gran popularidad.</p>
                    </div>
                </div>

                <div className="more-info">
                    <h3>¿Por qué visitar estos cines?</h3>
                    <p>
                        Estos lugares ofrecen experiencias únicas para los amantes del cine, 
                        con tecnología moderna, comodidad y una amplia variedad de películas 
                        nacionales e internacionales. Perfectos para disfrutar del séptimo arte 
                        en todo su esplendor.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Lugares;
