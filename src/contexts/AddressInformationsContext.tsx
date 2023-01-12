import { createContext, ReactNode, useContext, useState } from "react";

interface AddressInformationsContextData {
  setData: any;
  data: IDataProps;
}

interface IDataProps {
  street: string;
  number: number;
  district: string;
  city: string;
  uf: string;
}

export const AddressInformationsContext = createContext(
  {} as AddressInformationsContextData
);

interface AddressContextProviderProps {
  children: ReactNode;
}

export function AddressInformationsContextProvider({
  children,
}: AddressContextProviderProps) {
  const [data, setData] = useState({
    street: "",
    number: 0,
    district: "",
    city: "",
    uf: "",
  });

  return (
    <AddressInformationsContext.Provider
      value={{
        setData,
        data,
      }}
    >
      {children}
    </AddressInformationsContext.Provider>
  );
}

export function useAddressInformationsContext() {
  const context = useContext(AddressInformationsContext);
  return context;
} // isso aqui serve para não termos que ficar sempre importando o useContext em cada tela, quando formos usar o contexto.
