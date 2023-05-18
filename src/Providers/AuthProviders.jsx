import { createContext } from 'react';
import app from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";


export const AuthContext = createContext(null);

const auth = getAuth(app)


const AuthProviders = ({children}) => {

    const newUser = (email, password) => {
          return createUserWithEmailAndPassword(auth, email, password)
    }
    const user = {name: "logan"}

    const authInfo={
        user,
        newUser
    }

    return (
       <AuthContext.Provider value={authInfo}>
          {children}
       </AuthContext.Provider>
    );
};

export default AuthProviders;