import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import Router, { useRouter } from "next/router";

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
  searchQuery: string | null;
  setSearchQuery: Dispatch<SetStateAction<string | null>>;
}

type ContainerProps = {
  children: ReactNode;
};

export const MyGlobalContext = createContext<GlobalContext>(
  {} as GlobalContext
);

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
  const [modal, setModal] = useState<Boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string | null>("");

  const initializeApp = () => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    router.push("/");
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
    <MyGlobalContext.Provider
      value={{
        color,
        setColor,
        auth: { isLoggedIn, setIsLoggedIn, logout },
        searchQuery,
        setSearchQuery
      }}
    >
      {children}
    </MyGlobalContext.Provider>
  );
};
