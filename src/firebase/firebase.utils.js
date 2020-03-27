import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBDh4COubtgi7U8kXbDl0ABlIDz9lmIsOg',
  authDomain: 'crwn-db-d2377.firebaseapp.com',
  databaseURL: 'https://crwn-db-d2377.firebaseio.com',
  projectId: 'crwn-db-d2377',
  storageBucket: 'crwn-db-d2377.appspot.com',
  messagingSenderId: '341754812057',
  appId: '1:341754812057:web:288a3a2f59898793910a08'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;
