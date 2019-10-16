import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyD2CQ_HzEPVHNCKOlvgxmgks9mTeAP1lRk",
  authDomain: "my-finances-now-27891.firebaseapp.com",
  databaseURL: "https://my-finances-now-27891.firebaseio.com",
  projectId: "my-finances-now-27891",
  storageBucket: "",
  messagingSenderId: "385069616628",
  appId: "1:385069616628:web:b4979431c051881f3efda1",
  measurementId: "G-ETMJHSCFWD"
};

firebase.initializeApp(config);
firebase.firestore()

export default firebase;