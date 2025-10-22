import datos from '../data/peliculas.json';
function ListaPeliculas() {
    return(
        <div className='p-20'>
            <h1 className='text-center text-3xl fond-bold text-blue mb-8'>lista de peliculas</h1>
            <div className='grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
              {datos.peliculas.map(peliculas => (
                <div key={peliculas.id}
                classNa me='bg-white shadow-md p-4'>
                    <img src={`./${peliculas.imagen}`} alt="" className='w-full rounded-2xl' />
                    <h3 className='text-xl font-semibold text-gray-800 mb-2"' >{peliculas.titulo}</h3>
                    <p className='text-sm text-gray-600"'> Año: {peliculas.año}</p>
                    <p className='text-sm text-gray-600'>Genero: {peliculas.genero}</p>
                </div>
               ))}
            </div>
        </div>
    );
}

export default ListaPeliculas;