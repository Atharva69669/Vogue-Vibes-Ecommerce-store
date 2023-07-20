
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJm-gezdU4OySqxbOX_7TKM0xqm0J164s",
  authDomain: "e-commerce-8f720.firebaseapp.com",
  databaseURL: "https://e-commerce-8f720-default-rtdb.firebaseio.com",
  projectId: "e-commerce-8f720",
  storageBucket: "e-commerce-8f720.appspot.com",
  messagingSenderId: "177196043274",
  appId: "1:177196043274:web:cfedb2d78a52a91cae23f3",
  measurementId: "G-PVBDW0YQ1F"
};

export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
const analytics = getAnalytics(app);