import React from 'react';
// import { useEffect, useState } from 'react';
// import { soloPoke } from './services/fetch-utils';

export default function PokeDetail({ poke }) {


  
  return (
    <>
      <div className='pokie-detail'>
        <h1>{poke.name_english}</h1>
      </div>
    
    </>
  );
}
