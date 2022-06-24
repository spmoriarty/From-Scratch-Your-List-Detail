import React from 'react';
// import { useEffect, useState } from 'react';
// import { soloPoke } from './services/fetch-utils';

export default function PokeDetail({ poke }) {


  
  return (
    <>
      <div className='pokie-detail'>
        <h1>{poke.name_english}</h1>
        <h2>{poke.name_japanese}</h2>
        <h3>Is a {poke.type_0} type Pokemon with a {poke.type_1} type of damage.</h3>
        <p>Has a base health of: {poke.base_HP}</p>
        <p>With a base attack of {poke.base_Attack} and defense of {poke.base_Defense} </p>
        <p>The base speed is a factor of: {poke.base_Speed}</p>
      </div>
    
    </>
  );
}
