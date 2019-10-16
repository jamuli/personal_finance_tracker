import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createFirestoreInstance } from 'redux-firestore'
import { BrowserRouter as Router } from 'react-router-dom';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'

import App from './App';
import store from './store';
import firebase from './config/fbConfig';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const rrfConfig = {
  userProfile: 'users',
  userFirestoreForProfile: true
}

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
}


ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <Router>
        <App />
      </Router>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


