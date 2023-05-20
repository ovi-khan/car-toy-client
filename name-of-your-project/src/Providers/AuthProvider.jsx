import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase.config";


export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const createUser = (email, password) => {
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password)
    }

    const logInUser = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect( () => {
     const unsubscribed = onAuthStateChanged(auth, currentUser => {
        setUser('current User', currentUser)
        console.log('current user', currentUser)
        setLoading(false)
      })
      return () => {
        return unsubscribed()
      }
    } ,[])


  const authInfo = {
       user,
       loading,
       createUser,
       logInUser
  };
  return <AuthContext.Provider value={authInfo}>
            {children}
  </AuthContext.Provider>;
};

export default AuthProvider;
