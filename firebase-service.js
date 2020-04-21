 // Our web app's Firebase configuration
 var firebaseConfig = {
   apiKey: "AIzaSyC-GPq8l_aVTg3RyQMuhctsgeugIYDjkXc",
   authDomain: "arlagaarden-plus.firebaseapp.com",
   databaseURL: "https://arlagaarden-plus.firebaseio.com",
   projectId: "arlagaarden-plus",
   storageBucket: "arlagaarden-plus.appspot.com",
   messagingSenderId: "622820394275",
   appId: "1:622820394275:web:4901dd93da19feb0c0b896"
 };
 firebase.initializeApp(firebaseConfig);
 const _db = firebase.firestore();