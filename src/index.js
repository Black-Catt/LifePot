import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Auth0Provider } from '@auth0/auth0-react';

import { Provider } from 'react-redux';
import store from './store/index';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH_DOMAIN}
    clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
    cacheLocation="localstorage"
  >
    <Provider store={store}>
      <App />
    </Provider>
  </Auth0Provider>
);
