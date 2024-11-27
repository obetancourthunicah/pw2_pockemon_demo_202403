import {useState, useEffect} from 'react';
import PokemonItem from "./PokemonItem";
import { useNavigate } from 'react-router-dom';

import './PokemonList.css';
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
        <section className="w-full bg-gray-200 flex flex-col h-full grow">
            <ul className='grow'>
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
            <div className='flex flex-row items-center justify-between p-4'>
                {previous && <button className='justify-self-start btn' onClick={()=>{setFetchUrl(previous)}}>Anterior</button>}
                &nbsp;
                {next && <button className='justify-self-end btn' onClick={()=>{setFetchUrl(next)}}>Siguiente</button>}
            </div>
        </section>
    )
}

export default PokemonList;