import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import pokeFetch from './services/fetch-utils';
import PokeList from './PokeList';

export default function Pokemon() {
  const [pokemon, setPokemon] = useState([]);
  const params = useParams();

  useEffect(() => {
    async function getPoke() {
      const data = await pokeFetch(params.id);
      setPokemon(data);
    }
    getPoke();
  }, [params.id]);
  
  return (
    <div>
      <Link to='/'>Home</Link>
      <PokeList pokemons={pokemon}/>
    </div>
  );
}
