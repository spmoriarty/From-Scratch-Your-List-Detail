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
  
  return (
    
    <div>
      <h1>WELCOME TO THE THUNDERDOME</h1>
      <Link to='/'>Home</Link>
      <PokeDetail poke={pokemon}/>
    </div>
  );
}
