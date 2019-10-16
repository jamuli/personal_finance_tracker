import authReducer from './authReducer.js';
import budgetReducer from './budgetReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
  auth: authReducer,
  budget: budgetReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer  
})

export default rootReducer