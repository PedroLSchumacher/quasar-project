// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4rYzol3w2FZ_Ck4ghOmlLotRomE7MS64",
  authDomain: "pokemonquasar-b5d9d.firebaseapp.com",
  projectId: "pokemonquasar-b5d9d",
  storageBucket: "pokemonquasar-b5d9d.appspot.com",
  messagingSenderId: "122853631051",
  appId: "1:122853631051:web:6316b95f17b117d6bc99ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth  = getAuth(app);
const firebaseServices = {
  criarUsuarioComEmailSenha: (email, senha) => {
    createUserWithEmailAndPassword(auth, email, senha)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  }
}

export default firebaseServices;
