import React, { createContext, useState, useEffect, useContext } from "react";
import coursesData from '../data/data.json';


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
  const [query, setQuery] = useState("");


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

  const search = (data) => {
    const filtered = data.filter((item) => 
      (item.title && item.title.toLowerCase().includes(query.toLowerCase())) ||
      (item.description && item.description.toLowerCase().includes(query.toLowerCase())));
    console.log("Filtered Cources:", filtered);
    return filtered;
  };

  const filteredProducts = search(coursesData.coursesData);
  

  return (
    <AuthContext.Provider value={{ user, login, logout, query, setQuery, filteredProducts }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
