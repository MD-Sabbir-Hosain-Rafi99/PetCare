// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBa6xpE3NcDMLrMDkPdYl0ZPMHe-ohDPik",
  authDomain: "petcare-auth-b321d.firebaseapp.com",
  projectId: "petcare-auth-b321d",
  storageBucket: "petcare-auth-b321d.firebasestorage.app",
  messagingSenderId: "792171286035",
  appId: "1:792171286035:web:c7cf8c55f026c08686b9e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;