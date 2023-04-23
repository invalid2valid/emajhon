import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../../firebase.config";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const creatUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const sginIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    return signOut(auth);
  };

  const googleLogIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const authInfo = {
    user,
    creatUser,
    sginIn,
    setUser,
    logOut,
    googleLogIn,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children} </AuthContext.Provider>
  );
};

export default AuthProvider;
