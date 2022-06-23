import { useEffect, useState } from 'react';
import pokeFetch from './services/fetch-utils';
import PokeList from './PokeList';
import './App.css';



export default function PokePage() {
  const [pokemon, setPokemon] = useState({});
  const [page, setPage] = useState(1);
  const perPage = 20;

  useEffect(() => {
    async function fetch() {
      const from = page * perPage - perPage;
      const to = page * perPage;
      const pokemons = await pokeFetch(from, to);

      setPokemon(pokemons);
    }
    fetch();
  }, [page]);

    
  return (
    <><h1>The PokeDex!</h1>
      <div className='pokeDex-buttons'>
        <button onClick={() => setPage(page - 1)}>Previous PokeDex Page</button>
        <button onClick={() => setPage(page + 1)}>Next PokeDex Page</button>
      </div>
      <PokeList pokemons={pokemon} />
    </>
  );
}
