const PokemonGeneral = (
    {
        nombre,
        imgUrl,
        types
    }
) => {
    return (
        <>
            <div>Nombre: <span>{nombre}</span> </div>
            <div className='img'>
                <img src={imgUrl} alt={nombre} />
            </div>
            <div>
                Types
                <ul>
                    {types.map((o)=>{
                        return (<li key={o.type.name}>{o.type.name}</li>)
                    })}
               </ul>
            </div>
        </>
    );
}

export default PokemonGeneral;