// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgcukiQipLIgitfsUrY2Ph4Ml927PWbEQ",
  authDomain: "toy-store-e89c4.firebaseapp.com",
  projectId: "toy-store-e89c4",
  storageBucket: "toy-store-e89c4.appspot.com",
  messagingSenderId: "792241913097",
  appId: "1:792241913097:web:2e700b97d7fd79c3baa7d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app