// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUXSA72LdVnt8zVYZOK8yLVF3Owh0PfIg",
  authDomain: "realtor-clone-react-5f4ce.firebaseapp.com",
  projectId: "realtor-clone-react-5f4ce",
  storageBucket: "realtor-clone-react-5f4ce.appspot.com",
  messagingSenderId: "268675315751",
  appId: "1:268675315751:web:90b2f795747d6cd68bf602",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
