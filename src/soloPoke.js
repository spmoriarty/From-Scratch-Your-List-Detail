import React from 'react';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { soloPoke } from './services/fetch-utils';

export default function PokeDetail() {
  const params = useParams();
  const [pokeMon, setPokeMon] = useState(params.id);

  useEffect(() => {
    async function fetchPokie() {
      const data = await soloPoke(params.id);
      setPokeMon(data);
    } fetchPokie();
  }, [params.id]);

  return (
    <> <Link to='/'>Home</Link>
      <div className='pokie-detail'>
        <h1>{pokeMon.name_english}</h1>
      </div>
    </>
  );
}
