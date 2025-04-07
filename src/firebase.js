import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCdinHyX3BUM4Lcly4QdKh5WlwlZWq-s7A",
    authDomain: "fitness-app-41e90.firebaseapp.com",
    projectId: "fitness-app-41e90",
    storageBucket: "fitness-app-41e90.firebasestorage.app",
    messagingSenderId: "191687868172",
    appId: "1:191687868172:web:bbe42e46aa11e799bc5329",
    measurementId: "G-DEEJL8PH7C"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
