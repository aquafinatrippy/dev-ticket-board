import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const useAuthStatus = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setloading] = useState(true);
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    if (user) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
    setloading(false);
  }, [user]);

  return { loggedIn, loading };
};
