import './contacto.css'

function Contacto() {
    return (
        <section className="contacto" id="contacto">
            <div className="container">
                <h3>Contáctanos</h3>
                <p>
                    ¿Tienes una sugerencia, quieres recomendar una película o necesitas ayuda con tu reserva?
                    ¡Estamos aquí para ti! Completa el formulario y nuestro equipo de cine te responderá pronto.
                </p>

                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Nombre completo:</label>
                        <input type="text" id="name" name="name" placeholder="Ejemplo: Luis Ramírez" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Correo electrónico:</label>
                        <input type="email" id="email" name="email" placeholder="ejemplo@correo.com" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="topic">Motivo del mensaje:</label>
                        <select id="topic" name="topic" required>
                            <option value="">Selecciona una opción</option>
                            <option value="sugerencia">Sugerencia de película</option>
                            <option value="reserva">Consulta sobre reservas</option>
                            <option value="soporte">Soporte o ayuda</option>
                            <option value="otros">Otros</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Mensaje:</label>
                        <textarea id="message" name="message" rows="5" placeholder="Escribe tu mensaje aquí..." required></textarea>
                    </div>

                    <button type="submit" className="btn">🎟️ Enviar mensaje</button>
                </form>

                <div className="contact-info">
                    <h4>Visítanos o escríbenos:</h4>
                    <ul>
                        <li>📍 Dirección: Av. del Cine 456, Lima, Perú</li>
                        <li>📞 Teléfono: +51 999 888 777</li>
                        <li>📧 Email: contacto@cineplanetperu.com</li>
                        <li>🕒 Horario: Lunes a Domingo - 10:00 a.m. a 11:00 p.m.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Contacto;
