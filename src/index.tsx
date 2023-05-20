import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Auth0Provider } from '@auth0/auth0-react';

import { Provider } from 'react-redux';
import { store } from './store/index';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Auth0Provider
    domain={'dev-3jxnhaz14mcob0a3.us.auth0.com'}
    clientId={'ZMkrIWp4NjGWNaR7fDJ82o7nPuMddG2k'}
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
