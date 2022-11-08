// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRlvosZCd3XnqS1wZgO2ZWBgZlDv0Nfus",
  authDomain: "dentist-review.firebaseapp.com",
  projectId: "dentist-review",
  storageBucket: "dentist-review.appspot.com",
  messagingSenderId: "667682329524",
  appId: "1:667682329524:web:061fbaae8e1ccdf41118e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;