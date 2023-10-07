// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBAqI5qTWT366S_T06Sp_ztuTjnwkCwHB8",
    authDomain: "fir-60ca0.firebaseapp.com",
    projectId: "fir-60ca0",
    storageBucket: "fir-60ca0.appspot.com",
    messagingSenderId: "90885941424",
    appId: "1:90885941424:web:5ce95d5e469090f93c3375",
    measurementId: "G-ESBH0QCWZ9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);