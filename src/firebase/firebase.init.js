/// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKsX5_h1GE4AzNhDdtzT-WzH9uWyt1MKI",
  authDomain: "chef-recipe-hunter-8f8f7.firebaseapp.com",
  projectId: "chef-recipe-hunter-8f8f7",
  storageBucket: "chef-recipe-hunter-8f8f7.appspot.com",
  messagingSenderId: "257612147547",
  appId: "1:257612147547:web:b45330d70570af2aa6087e",
  measurementId: "G-696XVNST1H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default app;