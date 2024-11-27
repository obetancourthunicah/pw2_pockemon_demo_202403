import { useState, useEffect} from 'react';
import Header from "../cmps/Header";
import PokemonGeneral from "../cmps/Details/PokemonGeneral";
import { PokemonStats } from '../cmps/Details/PokemonStats';
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
            <section className="p-4 flex flex-col gap-4 h-full grow">
                <section className='flex flex-col grow h-full'>

                    <PokemonGeneral
                        nombre={pokemonData.name}
                        imgUrl={pokemonData.sprites.other["official-artwork"].front_default}
                        types={pokemonData.types}
                    />

                    <PokemonStats
                        stats={pokemonData.stats}
                    />
                </section>
                <section className='flex justify-end'>
                    <Link className='btn' to={'/'}>Ir a Home</Link>
                </section>
            </section>
        </>
    );
}

export default Detail;