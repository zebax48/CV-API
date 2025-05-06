export const BASE_URL = 'https://rickandmortyapi.com/api/character/';

export async function fetchCharacters(page = 1, status = '') {
  try {
    let url = `${BASE_URL}?page=${page}`;
    if (status) {
      url += `&status=${status}`;
    }
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener personajes:', error);
    throw error;
  }
}

export async function fetchPlanet(url) {
  try {
    const response = await fetch(`${url}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener lugar:', error);
    throw error;
  }
}