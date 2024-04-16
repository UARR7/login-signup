import React, { createContext,useContext, useEffect, useState } from 'react'

const AuthContext = createContext();
export const AuthProvider = ({children}) => {
  const [token, setToken] = useState(null);
  const [useData, setUserData] = useState(null);
  const [isAuthenticated,setIsAuthenticated] = useState(false);
  const storeData = JSON.parse(localStorage.getItem('user_data'));

  useEffect(() =>{
    if(storeData) {
        const {userToken, user} = storeData;
        setToken(userToken);
        setUserData(user);
        setIsAuthenticated(true);
    }
   },[]);
  const login = (newToken, newData)=>{
    localStorage.setItem("user_data",JSON.stringify({userToken: newToken,  user : newData}),);
    setToken(newToken);
    setUserData(newData);
    setIsAuthenticated(true);  
};
  const logout = () =>{
    localStorage.removeItem("user_data");
    setToken(null);
    setUserData(null);
    setIsAuthenticated(false); 
  };

  return (
    <AuthContext.Provider value={{ token, isAuthenticated ,login,logout,useData}}>
        {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
