import { client } from './client';

export default async function pokeFetch() {
  const response = await client.from('PokeDex').select('*');
  return response.data;
}