import React, { createContext, useContext, useState } from "react";
interface DataType {
  nuur: boolean;
  hool: boolean;
  hurgelt: boolean;
  sags: boolean;
  newtreg: boolean;
}

export interface GlobalContext {
  color: DataType;
  setColor: () => void;
}

type ContainerProps = {
  children: React.ReactNode;
};

export const MyGlobalContext = createContext({});
export const useGlobalContext = () => useContext(MyGlobalContext);
export const MyGlobalContextProvider = ({ children }: ContainerProps) => {
  const [color, setColor] = useState<DataType>({
    nuur: false,
    hool: false,
    hurgelt: false,
    sags: false,
    newtreg: false,
  });

  return (
    <MyGlobalContext.Provider value={{ color, setColor }}>
      {children}
    </MyGlobalContext.Provider>
  );
};
