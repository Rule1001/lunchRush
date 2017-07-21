import firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyBZ3YM6QPqJLfwLDnL6KecREg-sk8UIOdc',
    authDomain: 'lunch-rush-792ff.firebaseapp.com',
    databaseURL: 'https://lunch-rush-792ff.firebaseio.com',
    projectId: 'lunch-rush-792ff',
    storageBucket: 'lunch-rush-792ff.appspot.com',
    messagingSenderId: '137725554605'
  };


firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
