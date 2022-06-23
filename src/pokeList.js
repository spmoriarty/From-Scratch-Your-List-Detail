import { Link } from 'react-router-dom';

export default function PokeList({ pokemons }) {
  return (
    <div className='poke-list'>
      {pokemons.map((pokemon, i) => 
        <Link key={pokemon.name_english + i + pokemon.id} to={`/pokemons/${pokemon.id}`}>
          <div className='pokies'>
            <h2>{pokemon.name_english}</h2>
            <h3>{pokemon.name_japanese}</h3>
            <p>{pokemon.type_0} pokemon with {pokemon.type_1} </p>
          </div>
        </Link>
      )}
    </div>
  );
}
