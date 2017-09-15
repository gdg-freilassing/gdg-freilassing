import firebase from 'firebase';

const config= {
  firebase_config: {
    apiKey: "AIzaSyAMliiBIWYHZAfI4eBm2Qaax0fKRJGPHKw",
    authDomain: "gdg-freilassing.firebaseapp.com",
    databaseURL: "https://gdg-freilassing.firebaseio.com",
    projectId: "gdg-freilassing",
    storageBucket: "gdg-freilassing.appspot.com",
    messagingSenderId: "81922675463"
  },
  firebase_providers: [
    firebase.auth.GoogleAuthProvider,
    firebase.auth.FacebookAuthProvider,
    firebase.auth.TwitterAuthProvider,
    firebase.auth.GithubAuthProvider,
    firebase.auth.EmailAuthProvider,
    firebase.auth.PhoneAuthProvider
  ],
  initial_state: {
    theme: 'gdg',
    locale: 'en'
  },
  drawer_width: 256
}

export default config;
