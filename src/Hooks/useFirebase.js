import { useEffect, useState } from "react"
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase.init';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const googleSignInHandler = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
                console.log(result.user)
            })
            .catch(error => console.error(error))
    }

    const handleSignOut = () => {
        signOut(auth)
            .then(() => { })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user);
        })
    }, [])

    return { user, googleSignInHandler, handleSignOut }

}

export default useFirebase;