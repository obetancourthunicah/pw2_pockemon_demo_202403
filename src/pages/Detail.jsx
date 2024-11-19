import { useState, useEffect} from 'react';
import Header from "../cmps/Header";
import PokemonGeneral from "../cmps/Details/PokemonGeneral";
import { useParams, Link } from 'react-router-dom';
const Detail = (
) => {
    const { pokemonId } = useParams();
    const [pokemonData, setPokemonData] = useState(null);

    useEffect(()=>{
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
        .then( resp => resp.json())
        .then( data => setPokemonData(data));
    }, [setPokemonData, pokemonId]);

    if( pokemonData === null){
        return (<>
            <Header />
        </>)
    }
    return (
        <>
            <Header />
            <section>

                <PokemonGeneral
                    nombre={pokemonData.name}
                    imgUrl={pokemonData.sprites.other["official-artwork"].front_default}
                    types={pokemonData.types}
                />

                <div className="stats">
                    <div>HP: <span>100</span></div>
                    <div>Speed: <span>100</span></div>
                    <div>Attack: <span>100</span></div>
                    <div>Defense: <span>100</span></div>

                </div>
            </section>
            <Link to={'/'}>Ir a Home </Link>
        </>
    );
}

export default Detail;