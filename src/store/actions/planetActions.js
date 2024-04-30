import { setPlanets, loadMorePlanets } from '../reducers/planetSlice';

export const searchPlanets = (query) => async (dispatch) => {
  try {
    const response = await fetch(`https://swapi.dev/api/planets/?search=${query}`);
    const data = await response.json();
    dispatch(setPlanets(data.results));
  } catch (error) {
    console.error('Error searching planets:', error);
  }
};

export const fetchMorePlanets = (url) => async (dispatch) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    dispatch(loadMorePlanets({ planets: data.results, nextPage: data.next }));
  } catch (error) {
    console.error('Error fetching more planets:', error);
  }
};
