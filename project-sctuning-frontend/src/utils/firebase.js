import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBV9obhTn7vg8V3rfeEe5n6UGexkW0j858",
    authDomain: "sctuningapp.firebaseapp.com",
    projectId: "sctuningapp",
    storageBucket: "sctuningapp.firebasestorage.app",
    messagingSenderId: "661968810139",
    appId: "1:661968810139:web:3f04e34dea8b388306563e",
    measurementId: "G-5VQRX2R2XK"
};
  
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);

export { auth, storage, signInWithEmailAndPassword }