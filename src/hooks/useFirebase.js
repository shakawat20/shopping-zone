import { useState,useEffect } from "react"
import { getAuth, signInWithPopup, onAuthStateChanged, signOut,GoogleAuthProvider } from "firebase/auth";
import initializeAuthentication from "../firebase/firebase.init";

initializeAuthentication()
function useFirebase() {
    const [user, setUser] = useState({});
    const auth = getAuth();
    const gProvider =new GoogleAuthProvider()

    const signInUsingGoogle = () => {
       return signInWithPopup(auth,gProvider)
    };
    
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            });
    };
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
    }, []
    );
    return {
        user,
        logOut,
        signInUsingGoogle,
    };
}
export default useFirebase