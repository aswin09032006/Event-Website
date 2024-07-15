import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBRQ1yhfoN76x8NXESjlBplf2cag3a7WX0",
  authDomain: "event-registration-abad5.firebaseapp.com",
  projectId: "event-registration-abad5",
  storageBucket: "event-registration-abad5.appspot.com",
  messagingSenderId: "804258184226",
  appId: "1:804258184226:web:85ca9bdebdc7c93ff71e7b",
  measurementId: "G-V4PHVRM03H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;