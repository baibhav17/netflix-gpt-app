// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOIHQ8gnvHjt6pXvgvjY-bEi4tnu_Y6Og",
  authDomain: "newtflix-clone-baibhav.firebaseapp.com",
  projectId: "newtflix-clone-baibhav",
  storageBucket: "newtflix-clone-baibhav.appspot.com",
  messagingSenderId: "289121973919",
  appId: "1:289121973919:web:4021e36451e32002bfd4aa",
  measurementId: "G-15N06Y72TB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
