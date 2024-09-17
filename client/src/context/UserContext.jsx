import { createContext, useContext, useState } from 'react';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({});
  const [isAdmin, setIsAdmin] = useState(false);
  const [userName, setUserName] = useState('User');
  const [isDoctor, setIsDoctor] = useState(false);

  return (
    <UserContext.Provider
      value={{
        isLogin,
        setIsLogin,
        user,
        setUser,
        isAdmin,
        setIsAdmin,
        userName,
        setUserName,
        isDoctor,
        setIsDoctor,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

export const useUser = () => {
  return useContext(UserContext);
};


