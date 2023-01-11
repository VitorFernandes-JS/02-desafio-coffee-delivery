import { createContext, ReactNode, useContext, useState } from "react";
import { coffeesUtils } from "../../src/utils/Coffee";
import { CoffeeProps } from "../../src/utils/Coffee";
import { CardCoffeeHorizontalProps } from "../components/CardCoffeeHorizontal";

interface CoffeeInformationsContextData {
  handleSendCoffeeToCart: (id: string) => void;
  handleAddCoffeeInCart: (id: string) => void;
  handleRemoveCoffeeInCart: (id: string) => void;
  handleClickInButton: (titleButton: string) => void;
  clickInButton: number;
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
  const [clickInButton, setClickInButton] = useState(0);

  function handleClickInButton(titleButton: string) {
    if (titleButton === "CARTAO DE CREDITO") {
      return setClickInButton((state) => (state = 0));
    }
    if (titleButton === "CARTAO DE DEBITO") {
      return setClickInButton((state) => (state = 1));
    } else {
      return setClickInButton((state) => (state = 2));
    }
  }

  function handleSendCoffeeToCart(id: string) {
    setQuantityToCart(
      coffees
        .filter((item) => item.id === id)
        .map((item) => {
          return {
            id: item.id,
            title: item.title,
            value: item.value,
            quantity: item.quantity,
            image: item.image,
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
        handleClickInButton,
        clickInButton,
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
} // isso aqui serve para não termos que ficar sempre importando o useContext em cada tela, quando formos usar o contexto.
