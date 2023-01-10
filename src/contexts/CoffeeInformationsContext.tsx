import { createContext, ReactNode, useContext, useState } from "react";
import { coffeesUtils } from "../../src/utils/Coffee";
import { CoffeeProps } from "../../src/utils/Coffee";
import { CardCoffeeHorizontalProps } from "../components/CardCoffeeHorizontal";

interface CoffeeInformationsContextData {
  handleSendCoffeeToCart: (id: string) => void;
  handleAddCoffeeInCart: (id: string) => void;
  handleRemoveCoffeeInCart: (id: string) => void;
  coffees: CoffeeProps[];
  quantityToCart: CardCoffeeHorizontalProps[];
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
  const [quantityToCart, setQuantityToCart] = useState<
    CardCoffeeHorizontalProps[]
  >([]);

  function handleSendCoffeeToCart(id: string) {
    setQuantityToCart(
      coffees
        .filter((item) => item.id === id)
        .map((item) => {
          return {
            id: item.id,
            title: item.title,
            image: item.image,
            value: item.value,
            quantity: item.quantity,
          };
        })
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
