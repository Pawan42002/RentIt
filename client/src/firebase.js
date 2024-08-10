// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyC3vp3vBoXYygQGDwol9tyJRJJHs4RAS90",
	authDomain: "rentithost.firebaseapp.com",
	projectId: "rentithost",
	storageBucket: "rentithost.appspot.com",
	messagingSenderId: "903531925599",
	appId: "1:903531925599:web:3e4ed7c446f5a3cbd80bea",
	measurementId: "G-C99Q3SZ2W3",
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
