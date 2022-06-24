import React from 'react';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { soloPoke } from './services/fetch-utils';

export default function soloPoke() {
const params = useParams();
const [pokeMon, setPokeMon] = useState(params.id);


  return (
    <div>soloPoke</div>
  );
}
