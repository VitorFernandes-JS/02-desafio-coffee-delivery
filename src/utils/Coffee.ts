import { v4 as uuidv4 } from "uuid";

import Expresso from "../assets/Expresso.png";
import Americano from "../assets/Americano.png";
import Arabe from "../assets/Arabe.png";
import CafeGelado from "../assets/Café-Gelado.png";
import CafeComLeite from "../assets/Café-com-Leite.png";
import Capuccino from "../assets/Capuccino.png";
import ChocolateQuente from "../assets/Chocolate-Quente.png";
import Cubano from "../assets/Cubano.png";
import ExpressoCremoso from "../assets/Expresso-Cremoso.png";
import Havaiano from "../assets/Havaiano.png";
import Irlandês from "../assets/Irlandês.png";
import Latte from "../assets/Latte.png";
import Macchiato from "../assets/Macchiato.png";
import Mocaccino from "../assets/Mochaccino.png";

import { CardProps } from "../components/CardCoffeeVertical";

export interface CoffeeProps extends CardProps {
  id: string;
}

export const coffee = [
  {
    id: uuidv4(),
    image: Expresso,
    category: "Tradicional",
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    value: 9.9,
    quantity: 0,
  },
  {
    id: uuidv4(),
    image: Americano,
    category: "Tradicional",
    title: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    value: 7.5,
    quantity: 0,
  },
  {
    id: uuidv4(),
    image: ExpressoCremoso,
    category: "Tradicional",
    title: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    value: 10.5,
    quantity: 0,
  },
  {
    id: uuidv4(),
    image: CafeGelado,
    category: "Tradicional",
    secondeCategory: "Gelado",
    title: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    value: 13.5,
    quantity: 0,
  },
  {
    id: uuidv4(),
    image: CafeComLeite,
    category: "Tradicional",
    secondeCategory: "Com leite",
    title: "Café com leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    value: 11.5,
    quantity: 0,
  },
  {
    id: uuidv4(),
    image: Latte,
    category: "Tradicional",
    secondeCategory: "Com leite",
    title: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    value: 17.5,
    quantity: 0,
  },
  {
    id: uuidv4(),
    image: Capuccino,
    category: "Tradicional",
    secondeCategory: "Com leite",
    title: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    value: 13.5,
    quantity: 0,
  },
  {
    id: uuidv4(),
    image: Macchiato,
    category: "Tradicional",
    secondeCategory: "Com leite",
    title: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    value: 12.4,
    quantity: 0,
  },
  {
    id: uuidv4(),
    image: Mocaccino,
    category: "Tradicional",
    secondeCategory: "Com leite",
    title: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    value: 9.5,
    quantity: 0,
  },
  {
    id: uuidv4(),
    image: ChocolateQuente,
    category: "Especial",
    secondeCategory: "Com leite",
    title: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    value: 14.6,
    quantity: 0,
  },
  {
    id: uuidv4(),
    image: Cubano,
    category: "Especial",
    secondeCategory: "Alcoólico",
    thirdCategory: "Gelado",
    title: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    value: 22.5,
    quantity: 0,
  },
  {
    id: uuidv4(),
    image: Havaiano,
    category: "Especial",
    title: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    value: 19.3,
    quantity: 0,
  },
  {
    id: uuidv4(),
    image: Arabe,
    category: "Especial",
    title: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    value: 16.2,
    quantity: 0,
  },
  {
    id: uuidv4(),
    image: Irlandês,
    category: "Especial",
    secondeCategory: "Alcoólico",
    title: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    value: 17.8,
    quantity: 0,
  },
] as CoffeeProps[];
