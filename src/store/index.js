import { compose, createStore, applyMiddleware } from 'redux';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import thunk from 'redux-thunk';
import firebase from '../config/fbConfig';

import rootReducer from './reducers';
// import firebase from '../config/fbConfig.js'

// const rrfConfig = {
//   userProfile: 'users',
//   userFirestoreForProfile: true
// }

// const composeEnhancers =
//   process.env.NODE_ENV === 'development'
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     : compose;

const middleware = [
  thunk.withExtraArgument({ getFirestore }),
  // This is where you add other middleware like redux-observable
];

const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middleware),
  reduxFirestore(firebase),
  )
)

// const store = createStore(
//   rootReducer,
  
//   composeEnhancers(
//     reactReduxFirebase(firebase, rrfConfig),
//     reduxFirestore(firebase),
//     applyMiddleware(thunk.withExtraArgument({ getFirebase,getFirestore }))
//   )
// )



export default store;
