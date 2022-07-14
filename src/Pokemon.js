import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { soloPoke } from './services/fetch-utils.js';
import PokeDetail from './soloPoke';

export default function Pokemon() {
  const [pokemon, setPokemon] = useState([]);
  const params = useParams();
  useEffect(() => {
    async function getPoke() {
      const data = await soloPoke(params.id);

      setPokemon(data);
    }
    getPoke();
  }, [params.id]);
  //yay
  return (
    
    <div>
      <h2>Stats</h2>
      <Link to='/'>Home</Link>
      <PokeDetail poke={pokemon}/>
    </div>
  );
}
