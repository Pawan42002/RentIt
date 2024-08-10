// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDpdZkXnrAJ0HEqqqagBWp3THqgcC5VnKI",
	authDomain: "rent-it3.firebaseapp.com",
	projectId: "rent-it3",
	storageBucket: "rent-it3.appspot.com",
	messagingSenderId: "577773763832",
	appId: "1:577773763832:web:bf0b41a267548bb748cf0d",
	measurementId: "G-DLCFHXPL0R",
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
