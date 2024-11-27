import './PokemonItem.css';
const PokemonItem = ({name="Nombre de Pokemon", id="-1", onClick=(id)=>{}})=>{
    return (
        <li className="pokemonlistitem">
            <span>{name} </span>
            <a onClick={()=>onClick(id)}>Ver</a>
        </li>
    );
}

export default PokemonItem;