import {useState, useEffect} from 'react';
import PokemonItem from "./PokemonItem";
import { useNavigate } from 'react-router-dom';
const PokemonList = ()=>{
    const [pokemonEntries, setPokemonEntries] = useState([]);
    const [next, setNext] = useState(null);
    const [previous, setPrevious] = useState(null);
    const [fetchUrl, setFetchUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0');
    const redirect = useNavigate();
    useEffect(()=>{
        const url = fetchUrl;
        fetch(url)
            .then((r)=>r.json())
            .then((d)=>{
                setPokemonEntries(d.results);
                setNext(d.next || null);
                setPrevious(d.previous || null);
            });
    } , [setPokemonEntries, fetchUrl]);

    const onClickHandler = (id)=>{
        const parts = id.split('/');
        console.log(parts);
        const _id = parts[parts.length-2];
        redirect(`detail/${_id}`);
    }
    return (
        <section>
            <ul>
                {
                    pokemonEntries.length>0 &&
                    pokemonEntries.map(
                        (pokemon)=>(
                            <PokemonItem
                                key={pokemon.name}
                                name={pokemon.name}
                                id={pokemon.url}
                                onClick={onClickHandler}
                            />
                        )
                    )
                }
            </ul>
            <div>
                {previous && <button onClick={()=>{setFetchUrl(previous)}}>Anterior</button>}
                &nbsp;
                {next && <button onClick={()=>{setFetchUrl(next)}}>Siguiente</button>}
            </div>
        </section>
    )
}

export default PokemonList;