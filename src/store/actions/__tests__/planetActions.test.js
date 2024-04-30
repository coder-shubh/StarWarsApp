import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { searchPlanets, fetchMorePlanets } from './planetActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('planetActions', () => {
  it('searchPlanets action dispatches setPlanets action with fetched data', async () => {
    const store = mockStore({ planets: { planets: [] } });
    await store.dispatch(searchPlanets('Tatooine'));
    const actions = store.getActions();
    expect(actions[0].type).toEqual('planets/setPlanets');
  });

  it('fetchMorePlanets action dispatches loadMorePlanets action with fetched data', async () => {
    const store = mockStore({ planets: { planets: [], nextPage: 'https://swapi.dev/api/planets/?page=2' } });
    await store.dispatch(fetchMorePlanets('https://swapi.dev/api/planets/?page=2'));
    const actions = store.getActions();
    expect(actions[0].type).toEqual('planets/loadMorePlanets');

  });
});
