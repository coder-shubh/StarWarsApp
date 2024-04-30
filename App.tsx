import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import StarshipsList from './src/components/StarshipsList';

const App = () => {
  return (
    <Provider store={store}>
      <StarshipsList />
    </Provider>
  );
};

export default App;
