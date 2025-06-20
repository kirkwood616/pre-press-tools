import { auth } from "@/firebase";
import { type User, onAuthStateChanged } from "firebase/auth";
// import { onAuthStateChanged, type User } from "firebase/auth";
import { useEffect, useState } from "react";

export default function useAuthCheck() {
  const [user, setUser] = useState<User | null>(null);
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      }
      setCheckingAuth(false);
    });
    return unsubscribe;
  }, []);

  return { user, setUser, checkingAuth };
}
