import React, { useEffect, useState } from "react";
import { auth } from "../../firebase/firebase";
const AuthContext = React.createContext(null);
export function useAuth() {
  return React.useContext(AuthContext);
}
export function AuthProvider({ children }) {
  const [currentUser, setcurrentUser] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  async function initializeUser(user) {
    try {
      if (user) {
        setcurrentUser({ ...user });
        setUserLoggedIn(true);
      } else {
        setcurrentUser(null);
        setUserLoggedIn(false);
      }
    } catch (error) {
      console.error("Error in initializeUser:", error);
    } finally {
      setLoading(false);
    }
  }
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      initializeUser(user);
    });
    return unsubscribe;
  }, []);
  
  const value = {
    currentUser,
    userLoggedIn,
    loading,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
