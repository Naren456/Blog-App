const BASE_URL = 'https://api.rawg.io/api';
const API_KEY = import.meta.env.VITE_RAWG_API_KEY;

const headers = {
  'Content-Type': 'application/json',
};

export const fetchGames = async (params = {}) => {
  try {
    const searchParams = new URLSearchParams({
      key: API_KEY,
      ...params,
    });

    const response = await fetch(`${BASE_URL}/games?${searchParams}`, {
      method: 'GET',
      headers,
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching games:', error);
    throw error;
  }
};

export const fetchGenres = async () => {
  try {
    const response = await fetch(`${BASE_URL}/genres?key=${API_KEY}`, {
      method: 'GET',
      headers,
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching genres:', error);
    throw error;
  }
}; 