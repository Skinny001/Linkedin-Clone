import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

/*________________________________________________________________________________*/

const firebaseConfig = {
  apiKey: "AIzaSyDT1qDsHMgmYTGYy7zcwf9raQQQOECK1LE",
  authDomain: "linkedin-clone-7803d.firebaseapp.com",
  projectId: "linkedin-clone-7803d",
  storageBucket: "linkedin-clone-7803d.appspot.com",
  messagingSenderId: "318666970638",
  appId: "1:318666970638:web:e1a4ca351aaa8380e8ce5f",
  measurementId: "G-TD0RQLXSQS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const provider = new GoogleAuthProvider();




