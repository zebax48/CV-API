export const BASE_URL = 'https://rickandmortyapi.com/api/character/';

export async function fetchCharacters(page = 1) {
  try {
    let url = `${BASE_URL}?page=${page}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener personajes:', error);
    throw error;
  }
}