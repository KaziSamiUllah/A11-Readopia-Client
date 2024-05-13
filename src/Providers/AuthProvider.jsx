import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [librarian, setLibrarian] = useState(false);
  const auth = getAuth(app);

  //// Sign UP////
  const SignUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Sign In/Log in///
  const SingIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleProvider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    setLoading(true);
    signInWithPopup(auth, googleProvider);
  };

  // Sign Out/ Log Out////
  const SignOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  //  user State (Logged in or not)
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      //CleanUP
      unSubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const UpdateUserData = (userName, img) => {
    return updateProfile(auth.currentUser, {
      displayName: userName,
      photoURL: img,
    });
  };

  /////////////////store user info to db///////////////
  console.log(user);

  // if (user) {
  //   const userEmail = user.email;
  //   const userData = { userEmail, librarian };
  //   axios.post("http://localhost:5000/users", userData)
  //   .then(res =>
  //     {console.log(res.data)
  //   });
  // }

  const authInfo = {
    SignUp,
    SingIn,
    SignOut,
    signInWithGoogle,
    UpdateUserData,
    user,
    loading,
    setLibrarian,
    librarian,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
