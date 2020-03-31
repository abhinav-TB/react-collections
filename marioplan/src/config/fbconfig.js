import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBDFMLyx7ti_exfE3UNdnMFcRjmJb9bJd0",
    authDomain: "mario-plan-d73fd.firebaseapp.com",
    databaseURL: "https://mario-plan-d73fd.firebaseio.com",
    projectId: "mario-plan-d73fd",
    storageBucket: "mario-plan-d73fd.appspot.com",
    messagingSenderId: "483084217737",
    appId: "1:483084217737:web:351fb343ac0c6754488558",
    measurementId: "G-G8HHXHG51V"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;
  