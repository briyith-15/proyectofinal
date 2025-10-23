import datos from '../data/peliculas.json';

function ListaPeliculas() {
  return (
    <div className="p-20">
      <h1 className="text-center text-3xl font-bold text-blue-500 mb-8">
        Lista de Películas
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {datos.peliculas.map((pelicula) => (
          <div
            key={pelicula.id}
            className="bg-white shadow-md p-4 rounded-xl hover:shadow-lg transition"
          >
            <img
              src={`/proyectofinal/json/${pelicula.imagen}`}
              alt={pelicula.titulo}
              className="w-full rounded-2xl"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {pelicula.titulo}
            </h3>
            <p className="text-sm text-gray-600">Año: {pelicula.año}</p>
            <p className="text-sm text-gray-600">Género: {pelicula.genero}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListaPeliculas;