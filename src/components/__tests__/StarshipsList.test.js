import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import StarshipsList from '../StarshipsList';
import { Provider } from 'react-redux';

const mockStore = configureStore([]);

describe('StarshipsList', () => {
  it('renders search input', () => {
    const store = mockStore({ starships: { starships: [] } });
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <StarshipsList />
      </Provider>
    );
    expect(getByPlaceholderText('Search starships...')).toBeTruthy();
  });

});
