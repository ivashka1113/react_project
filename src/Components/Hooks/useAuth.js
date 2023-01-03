import { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export function useAuth(authFirebase) {
  const [authentication, setAuthentication] = useState(null);

  const auth = authFirebase();
  const provider = new firebase.auth.GoogleAuthProvider();

  const logIn = () => {
    auth.signInWithPopup(provider);
  };

  const logOut = () => {
    auth
      .signOut()
      .then()
      .catch((err) => console.error());
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setAuthentication(user);
      } else {
        setAuthentication(null);
      }
    });
  }, [authentication]);

  return { authentication, logIn, logOut };
}
