import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("JWT") || null);

  const login = (newToken) => {
    setToken(newToken);
    localStorage.setItem("JWT", newToken);
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("JWT");
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
