import { createContext, ReactNode, useContext, useState } from "react";
import { coffeesUtils } from "../../src/utils/Coffee";
import { CoffeeProps } from "../../src/utils/Coffee";

interface CoffeeInformationsContextData {
  handleSendCoffeeToCart: (id: string) => void;
  handleAddCoffeeInCart: (id: string) => void;
  handleRemoveCoffeeInCart: (id: string) => void;
  coffees: CoffeeProps[];
  quantityToCart: number;
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
  const [coffees, setCoffees] = useState<CoffeeProps[]>(coffeesUtils);
  const [quantityToCart, setQuantityToCart] = useState(0);

  function handleSendCoffeeToCart(id: string) {
    setQuantityToCart(
      coffees
        .map((item) => (item.id === id ? item.quantity : item.quantity))
        .reduce((a, b) => a + b)
    );
  }

  function handleAddCoffeeInCart(id: string) {
    setCoffees((state) =>
      state.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      })
    );
  }

  function handleRemoveCoffeeInCart(id: string) {
    setCoffees((state) =>
      state.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
        return item;
      })
    );
  }

  return (
    <CoffeeInformationsContext.Provider
      value={{
        handleSendCoffeeToCart,
        handleAddCoffeeInCart,
        handleRemoveCoffeeInCart,
        coffees,
        quantityToCart,
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
