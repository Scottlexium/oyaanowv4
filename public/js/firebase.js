import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCXTyUE5xljbibz2YYd4JiAufVc0R4ggcM",
    authDomain: "oyaanow-2021.firebaseapp.com",
    projectId: "oyaanow-2021",
    storageBucket: "oyaanow-2021.appspot.com",
    messagingSenderId: "687498769973",
    appId: "1:687498769973:web:83181e184895b5efc9237c",
    measurementId: "G-FE14DNFSJ1"
  };

  // initialize firebase
  firebase.initializeApp(config);

 const app = firebase.initializeApp(firebaseConfig);
 const database = getDatabase(app);
 const auth = getAuth();



 var email = document.getElementById("email").value;
 var password = document.getElementById("password").value;
 var btn = document.getElementById('btn')


 btn.addEventListener('click', (e)=>{
     e.preventDefault();

     const auth = getAuth();
     signInWithEmailAndPassword(auth, email, password)
       .then((userCredential) => {
         // Signed in 
         const user = userCredential.user;
         // ...
       })
       .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
       });
 })
