import { client } from './client';

export default async function pokeFetch(from = 0, to = 20) {
  const response = await client.from('PokeDex').select('*').range(from, to);
  return response.data;
}

export async function soloPoke(id) {
  const response = await client.from('PokeDex').select('*').match({ id }).single();
  return response.data;
}