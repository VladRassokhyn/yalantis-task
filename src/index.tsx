import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store';
import { EmployeesPage } from './pages';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <EmployeesPage />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
