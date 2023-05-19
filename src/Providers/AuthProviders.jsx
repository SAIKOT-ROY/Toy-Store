import { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";


export const AuthContext = createContext(null);

const auth = getAuth(app)


const AuthProviders = ({children}) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    const newUser = (email, password) => {
          setLoading(true)
          return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
              setUser(currentUser);
            //   console.log('current user', currentUser);
              setLoading(false)
        });
        return () => {
              return unsubscribe();
        }
    },[])


    const logIn = (email, password) => {
          return signInWithEmailAndPassword(auth, email, password)
    }


    const authInfo={
        user,
        newUser,
        logIn
    }

    return (
       <AuthContext.Provider value={authInfo}>
          {children}
       </AuthContext.Provider>
    );
};

export default AuthProviders;