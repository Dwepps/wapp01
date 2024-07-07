// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYm9CvCx0UGJ5Tz2xE9ByGYSrJ5YMidws",
  authDomain: "wapp01.firebaseapp.com",
  projectId: "wapp01",
  storageBucket: "wapp01.appspot.com",
  messagingSenderId: "1058030344192",
  appId: "1:1058030344192:web:7319d7827f383e052920e5",
  measurementId: "G-LFCGGM0X91",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
