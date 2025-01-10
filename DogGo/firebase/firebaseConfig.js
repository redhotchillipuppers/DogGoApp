import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB40QAonGsw9Jx2Lq8uj8u_W3sIBK_FTs8",
  authDomain: "doggo-login-1a0af.firebaseapp.com",
  projectId: "doggo-login-1a0af",
  storageBucket: "doggo-login-1a0af.firebasestorage.app",
  messagingSenderId: "1038047803313",
  appId: "1:1038047803313:web:cc5971592704b8a1086f90"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);