import React, { createContext, useState, useEffect, useContext } from "react";

export const AuthContext = createContext({
  userdate: {
    _id: "",
    username: "",
    password: "",
    role: "",
  },
  login: () => {},
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const storedUser = localStorage.getItem("username");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (userdata, rememberMe) => {
    if (rememberMe) {
      localStorage.setItem("currentusername", userdata.username);

      localStorage.setItem(userdata.username, JSON.stringify(userdata));
    }
    setUser(userdata);
  };

  const logout = () => {
    localStorage.removeItem("username");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
