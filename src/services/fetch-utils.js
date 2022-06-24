import { client } from './client';

export default async function pokeFetch() {
  const response = await client.from('PokeDex').select('*');
  return response.data;
}

export async function soloPoke(id) {
  const response = await client.from('PokeDex').select('*').match({ id }).single();
  return response.data;
}