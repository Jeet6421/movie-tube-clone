import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportwebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import { applyMiddleware, compose } from 'redux';
import { legacy_createStore as createstore } from 'redux';
import {thunk} from 'redux-thunk';
import Reducers from './Reducers';
import { GoogleOAuthProvider } from '@react-oauth/google';



const store = createstore(Reducers,compose(applyMiddleware(thunk)) );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Provider store={store}> 
 <GoogleOAuthProvider clientId="883601712707-srrdk7g7vl0bkv14qb3q2dv0nv4gqs7b.apps.googleusercontent.com">
  <React.StrictMode>
   
      <App />
    
  </React.StrictMode>
  
  </GoogleOAuthProvider>;
  </Provider>
  
);

reportwebVitals();

