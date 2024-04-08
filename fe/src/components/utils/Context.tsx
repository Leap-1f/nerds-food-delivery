import React, { Dispatch, SetStateAction, createContext, useContext, useState, ReactNode, useEffect } from "react";
import { useRouter } from "next/router";
import { jwtDecode } from "jwt-decode";


interface DataType {
  nuur: boolean;
  hool: boolean;
  hurgelt: boolean;
  sags: boolean;
  newtreg: boolean;
}

interface AuthData {
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
  logout: () => void;
  
}


export interface GlobalContext {
  color: DataType;
  setColor: Dispatch<SetStateAction<DataType>>;
  auth: AuthData;
  userId: string | null;
}

type ContainerProps = {
  children: ReactNode;
};

export const MyGlobalContext = createContext<GlobalContext>({} as GlobalContext);

export const useGlobalContext = () => useContext(MyGlobalContext);

export const MyGlobalContextProvider = ({ children }: ContainerProps) => {
  const router = useRouter();
  const [color, setColor] = useState<DataType>({
    nuur: false,
    hool: false,
    hurgelt: false,
    sags: false,
    newtreg: false,
  });

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [modal, setModal] = useState<boolean>(false);
  const [userId, setUserId] = useState<string |null>(null);

  const initializeApp = () => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      const decodedToken: any = jwtDecode(token);
      
      if (decodedToken) {
        setUserId(decodedToken.userId)
      }
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setUserId(null);
    router.push("/")
  };

  useEffect(() => {
    initializeApp();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const timeout = setTimeout(logout, 900000);
      return () => clearTimeout(timeout);
    }
  }, [isLoggedIn]); 

  return (
    <MyGlobalContext.Provider value={{ color, setColor, auth: { isLoggedIn, setIsLoggedIn, logout }, userId }}>
      {children}
    </MyGlobalContext.Provider>
  );
};
