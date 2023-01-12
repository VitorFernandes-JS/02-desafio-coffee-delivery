import { createContext, ReactNode, useContext, useState } from "react";

interface AddressInformationsContextData {}

export const AddressInformationsContext = createContext(
  {} as AddressInformationsContextData
);

interface AddressContextProviderProps {
  children: ReactNode;
}

export function CoffeeInformationsContextProvider({
  children,
}: AddressContextProviderProps) {
  return (
    <AddressInformationsContext.Provider value={{}}>
      {children}
    </AddressInformationsContext.Provider>
  );
}

export function useCoffeInformationsContext() {
  const context = useContext(AddressInformationsContext);
  return context;
} // isso aqui serve para não termos que ficar sempre importando o useContext em cada tela, quando formos usar o contexto.