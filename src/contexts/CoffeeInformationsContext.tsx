import { createContext, ReactNode, useContext, useState } from "react";
import { coffeesUtils } from "../../src/utils/Coffee";
import { CoffeeProps } from "../../src/utils/Coffee";
import { CardCoffeeHorizontalProps } from "../components/CardCoffeeHorizontal";

interface CoffeeInformationsContextData {
  handleSendCoffeeToCart: (id: string) => void;
  handleAddCoffeeInCart: (id: string) => void;
  handleRemoveCoffeeInCart: (id: string) => void;
  handleClickInButton: (titleButton: string) => void;
  handleRemoveTotalCoffeeInCart: (id: string) => void;
  setTheme: (theme: boolean) => void;
  clickInButton: number;
  coffees: CoffeeProps[];
  quantityToCart: CardCoffeeHorizontalProps[];
  addToCart: boolean;
  visible: boolean;
  theme: boolean;
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
  const [addToCart, setAddToCart] = useState(false);
  const [visible, setVisible] = useState(false);
  const [theme, setTheme] = useState(false);

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
        .concat(...quantityToCart)
    );
    setVisible(true);
    setAddToCart(true);
  }

  // function handleSendCoffeeToCart(id: string) {
  //   const findedCoffee = coffees.find((item) => item.id === id);
  //   setQuantityToCart((state) => {
  //     return [
  //       ...state,
  //       {
  //         id: findedCoffee!.id,
  //         title: findedCoffee!.title,
  //         value: findedCoffee!.value,
  //         quantity: findedCoffee!.quantity,
  //         image: findedCoffee!.image,
  //       },
  //     ];
  //   });

  //   setVisible(true);
  //   setAddToCart(true);
  // } // Maneira mais performatica e correta de se fazer o handleSendCoffeeToCart

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

  function handleRemoveTotalCoffeeInCart(id: string) {
    setCoffees((state) =>
      state.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity - item.quantity,
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
        handleSendCoffeeToCart,
        handleAddCoffeeInCart,
        handleRemoveCoffeeInCart,
        handleRemoveTotalCoffeeInCart,
        setTheme,
        clickInButton,
        coffees,
        quantityToCart,
        addToCart,
        visible,
        theme,
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
