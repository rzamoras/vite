import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
// import 'flowbite';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB452d3QXhdCyGfZbtj710XlX3_Eqsot40",
  authDomain: "iscp-fa363.firebaseapp.com",
  projectId: "iscp-fa363",
  storageBucket: "iscp-fa363.appspot.com",
  messagingSenderId: "630984650886",
  appId: "1:630984650886:web:7862215cf9b839f2146107",
  measurementId: "G-T0982NYGNW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import Notifications from '@kyvg/vue3-notification'

createApp(App).use(router).use(Notifications).mount('#app')
