/* eslint-disable react-refresh/only-export-components */
import { createContext } from "react";
import { auth } from "../firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
// import { useState } from "react";
// import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  // const [user,setUser]=useState(null);

  const createUser = (email, password, name, phone) => {
    return createUserWithEmailAndPassword(auth, email, password, name, phone);
  };

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //   onAuthStateChanged(auth,currentUser => {
  //     if(currentUser){
  //         console.log("User Currently Loged In.",currentUser);
  //         setUser(currentUser)
  //     }
  //     else{
  //         console.log("User Currently Not Loged In.");
  //         setUser(null);
  //     }
  //   })
  const authInfo = {
    name: "Monir",
    // user,
    createUser,
    signInUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
