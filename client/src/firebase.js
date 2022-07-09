// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAThitiSwcP-APwFJMsYlng5FYbaZTMvW8",
  authDomain: "rent-it-f326a.firebaseapp.com",
  projectId: "rent-it-f326a",
  storageBucket: "rent-it-f326a.appspot.com",
  messagingSenderId: "83118044625",
  appId: "1:83118044625:web:3ac1c7849462e02d55dcf0",
  measurementId: "G-2G02N671TB",
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
