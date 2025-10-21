import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth"
// console.log(JSON.parse(import.meta.env.VITE_KEY))
const firebaseConfig = JSON.parse(import.meta.env.VITE_KEY);
// console.log(firebaseConfig);

// const firebaseConfig = JSON.parse(import.meta.env.VITE_KEY);



// {
//   apiKey: "AIzaSyD7_D8VU_0RPuPDmPBeOFokUpIEM5CuuCI",
//   authDomain: "swiggyproject-3d386.firebaseapp.com",
//   projectId: "swiggyproject-3d386",
//   storageBucket: "swiggyproject-3d386.firebasestorage.app",
//   messagingSenderId: "527500058601",
//   appId: "1:527500058601:web:6e60f8867182e2d06fb578"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const provider=new GoogleAuthProvider();

export {auth,provider};