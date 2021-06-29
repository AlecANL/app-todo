import React from 'react';
import { store } from 'redux/store';
import { Provider } from 'react-redux';
import AppRoute from './routes/AppRoute';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <AppRoute />;
    </Provider>
  );
}

export default App;
