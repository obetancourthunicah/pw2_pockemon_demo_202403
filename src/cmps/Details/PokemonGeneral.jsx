const PokemonGeneral = (
    {
        nombre,
        imgUrl,
        types
    }
) => {
    return (
        <section className="p-4 flex flex-col gap-4">
            <div className="font-bold">Nombre: <span>{nombre}</span> </div>
            <div className='img'>
                <img className="w-48 h-48 object-cover shadow-md rounded-full" src={imgUrl} alt={nombre} />
            </div>
            <div>
                <span className="font-bold">Types</span>
                <ul className="pl-8">
                    {types.map((o)=>{
                        return (<li key={o.type.name}>{o.type.name}</li>)
                    })}
               </ul>
            </div>
        </section>
    );
}

export default PokemonGeneral;