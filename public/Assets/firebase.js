// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbZH3Gzrz1STbKmdRKMuYzk62aWC92OTw",
  authDomain: "weather-app-1f7aa.firebaseapp.com",
  projectId: "weather-app-1f7aa",
  storageBucket: "weather-app-1f7aa.appspot.com",
  messagingSenderId: "732287200336",
  appId: "1:732287200336:web:fb2dd0badb537d33717555",
  measurementId: "G-KHMMLHVR92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);