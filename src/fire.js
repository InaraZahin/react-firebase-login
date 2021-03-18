import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD7H2BXknS5bbSunqt522xrocCl_vErtlI",
    authDomain: "login-20630.firebaseapp.com",
    projectId: "login-20630",
    storageBucket: "login-20630.appspot.com",
    messagingSenderId: "22964847002",
    appId: "1:22964847002:web:a43e325ab8414e69b03a23"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  export default fire; 