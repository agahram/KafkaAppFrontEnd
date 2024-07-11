import React, { ReactNode, useContext, useState } from "react";
import { createContext } from "react";

interface Props {
  children?: ReactNode;
}

interface InterfaceId {
  idArr: number[] | null;
  setIdArr: (itm: number[]) => void;
}

const InitialValue = {
  idArr: null,
  setIdArr: () => null,
};

const IdContext = createContext<InterfaceId>(InitialValue);

const IdProvider = ({ children }: Props) => {
  const [idArr, setIdArr] = useState<number[]>([]);
  console.log(idArr);

  return (
    <IdContext.Provider value={{ idArr, setIdArr }}>
      {children}
    </IdContext.Provider>
  );
};

function useId() {
  const context = useContext(IdContext);
  if (context === undefined)
    throw new Error("IdContext was used outside of the IdProvider");
  return context;
}

export { IdProvider, useId };
