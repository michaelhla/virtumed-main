import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import {auth} from "./firebase"

const logInWithEmailAndPassword = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const logout = () => {
    signOut(auth);
    window.location.href='http://localhost:3000';
  };

export {logInWithEmailAndPassword, logout}