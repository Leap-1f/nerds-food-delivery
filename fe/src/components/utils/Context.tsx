import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";
interface DataType {
  nuur: boolean;
  hool: boolean;
  hurgelt: boolean;
  sags: boolean;
  newtreg: boolean;
}

export interface GlobalContext {
  color: DataType;
  setColor: Dispatch<SetStateAction<DataType>>;
}

type ContainerProps = {
  children: ReactNode;
};

export const MyGlobalContext = createContext<GlobalContext>(
  {} as GlobalContext
);
export const useGlobalContext = () => useContext(MyGlobalContext);
export const MyGlobalContextProvider = ({ children }: ContainerProps) => {
  const [color, setColor] = useState<DataType>({
    nuur: false,
    hool: false,
    hurgelt: false,
    sags: false,
    newtreg: false,
  });
  const [modal, setModal] = useState<Boolean>(false);

  return (
    <MyGlobalContext.Provider value={{ color, setColor }}>
      {children}
    </MyGlobalContext.Provider>
  );
};
