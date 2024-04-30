import React from 'react';
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import store from '../src/store';
import App from '../App';

describe('App', () => {
  it('renders StarshipsList component wrapped in Provider with Redux store', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const starshipsList = getByTestId('starships-list');
    expect(starshipsList).toBeTruthy();
  });
});
