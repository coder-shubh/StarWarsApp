import { setStarships } from '../reducers/starshipsSlice';

export const fetchStarships = () => async (dispatch) => {
  try {
    const response = await fetch('https://swapi.dev/api/starships/');
    const data = await response.json();
    dispatch(setStarships(data.results));
  } catch (error) {
    console.error('Error fetching starships:', error);
  }
};
