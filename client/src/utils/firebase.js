import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interview-agent-2cb27.firebaseapp.com",
  projectId: "interview-agent-2cb27",
  storageBucket: "interview-agent-2cb27.firebasestorage.app",
  messagingSenderId: "90959445497",
  appId: "1:90959445497:web:60cac3fde2a9760ea59128",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };
