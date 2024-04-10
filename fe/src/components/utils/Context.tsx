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

export interface Meal {
  img: string;
  name: string;
  price: number;
  ingredient: string;
}


export interface GlobalContext {
  color: DataType;
  setColor: Dispatch<SetStateAction<DataType>>;
  auth: AuthData;
  userId: string | null;
  food: any[];
  setFood: React.Dispatch<React.SetStateAction<any[]>>;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  selectedMeal: Meal | null;
  setSelectedMeal: Dispatch<SetStateAction<Meal | null>>;
  quantity: number;
  setQuantity: Dispatch<SetStateAction<number>>;
  sideBarOpen: boolean;
  setSideBarOpen: Dispatch<SetStateAction<boolean>>;
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
  const [food, setFood] = useState<any[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [selectedMeal, setSelectedMeal] = useState<Meal | null>(null);
  const [quantity, setQuantity] = useState<number>(0);
  const [sideBarOpen, setSideBarOpen] = useState<boolean>(false);


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
    <MyGlobalContext.Provider value={{ color, setColor, auth: { isLoggedIn, setIsLoggedIn, logout }, userId, food, setFood, open, setOpen, quantity, setQuantity, selectedMeal, setSelectedMeal, setSideBarOpen, sideBarOpen }}>
      {children}
    </MyGlobalContext.Provider>
  );
};
