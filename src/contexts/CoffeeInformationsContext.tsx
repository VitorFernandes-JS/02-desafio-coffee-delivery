import { createContext, ReactNode, useContext, useState } from "react";
import { coffee } from "../../src/utils/Coffee";
import { CoffeeProps } from "../../src/utils/Coffee";

interface CoffeeInformationsContextData {
  handleSendCoffeeToCart: () => void;
  handleAddCoffeeInCart: () => void;
  handleRemoveCoffeeInCart: () => void;
  quantityCoffee: number;
}

export const CoffeeInformationsContext = createContext(
  {} as CoffeeInformationsContextData
);

interface CoffeeContextProviderProps {
  children: ReactNode;
}

export function CoffeeInformationsContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [quantityCoffee, setQuantityCoffee] = useState(0);
  const [coffees, setCoffees] = useState([] as CoffeeProps[]);

  function handleSendCoffeeToCart() {
    console.log("teste");
  }

  function handleAddCoffeeInCart() {
    setQuantityCoffee((state) => state + 1);
  }

  function handleRemoveCoffeeInCart() {
    setQuantityCoffee((state) => state - 1);
  }

  return (
    <CoffeeInformationsContext.Provider
      value={{
        handleSendCoffeeToCart,
        handleAddCoffeeInCart,
        handleRemoveCoffeeInCart,
        quantityCoffee,
      }}
    >
      {children}
    </CoffeeInformationsContext.Provider>
  );
}

export function useCoffeInformationsContext() {
  const context = useContext(CoffeeInformationsContext);
  return context;
}


