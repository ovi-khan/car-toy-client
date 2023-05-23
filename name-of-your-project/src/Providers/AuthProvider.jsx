// import React, { createContext, useEffect, useState } from "react";
// import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
// import app from "../firebase.config";


// export const AuthContext = createContext();
// const auth = getAuth(app);


// const AuthProvider = ({children}) => {
//     const [user, setUser] = useState(null)
//     const [loading, setLoading] = useState(true)


//     const createUser = (email, password) => {
//       setLoading(true)
//       return createUserWithEmailAndPassword(auth, email, password)
//     }

//     const logInUser = (email, password) => {
//       return signInWithEmailAndPassword(auth, email, password)
//     }

//     const googleSingIn = () => {
//       const googleProvider = new GoogleAuthProvider()
//       return signInWithPopup(auth, googleProvider)
//     }

//     const logOut = () => {
//       return signOut(auth)
//     }


//     useEffect( () => {
//      const unsubscribed = onAuthStateChanged(auth, currentUser => {
//         setUser('current User', currentUser)
//         console.log('current user', currentUser)
//         setLoading(false)
//       })
//       return () => {
//         return unsubscribed()
//       }
//     } ,[])


//   const authInfo = {
//        user,
//        loading,
//        createUser,
//        logInUser,
//        googleSingIn,
//        logOut
//   };
//   return <AuthContext.Provider value={authInfo}>
//               {children}
//   </AuthContext.Provider>;
// };

// export default AuthProvider;


import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from "../firebase.config";


export const AuthContext = createContext(null)
const auth = getAuth(app)


const AuthProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true)

    const createUser = (name, email, password) => {
      setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSingIn = () => {
            const googleProvider = new GoogleAuthProvider()
            return signInWithPopup(auth, googleProvider)
          }

    const logOut = () => {
      setLoading(true)
        return signOut(auth)
    }


    useEffect( () => {
        const unSubscribe = onAuthStateChanged(auth, (loggedUser) => {
            setUser(loggedUser)
        });
        return () => {
            unSubscribe();
        };
    } , []);

    const authInfo = {
        user,
        createUser,
        logInUser,
        googleSingIn,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;




