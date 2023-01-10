import { Minus, Plus, Trash } from "phosphor-react";
import Cafe from "../../assets/Americano.png";
import {
  ButtonLessAndmore,
  ButtonRemoveToCart,
  CardCoffeeHorizontalContainer,
  DivTitleAndButtons,
  Image,
  TitleCoffee,
  DivButtons,
  DivTitleAndValue,
  ValueCoffee,
  Line,
  ButtonRemove,
  ButtonAdd,
} from "./style";

export interface CardCoffeeHorizontalProps {
  id: string;
  title: string;
  value: number;
  image: string;
  quantity:number
}

export function CardCoffeeHorizontal({
  id,
  title,
  value,
  image,
  quantity,
}: CardCoffeeHorizontalProps) {
  return (
    <CardCoffeeHorizontalContainer>
      <div>
        <Image src={image} />
      </div>
      <DivTitleAndButtons>
        <DivTitleAndValue>
          <TitleCoffee>{title}</TitleCoffee>
          <ValueCoffee>{value.toLocaleString(
            "pt-br",
            { style: "currency", currency: "BRL" }
          )}</ValueCoffee>
        </DivTitleAndValue>
        <DivButtons>
          <ButtonLessAndmore>
            <ButtonRemove>
              <Minus size={14} color="#8047F8" />
            </ButtonRemove>
            <span>{quantity}</span>
            <ButtonAdd>
              <Plus size={14} color="#8047F8" />
            </ButtonAdd>
          </ButtonLessAndmore>
          <ButtonRemoveToCart>
            <Trash size={14} color="#8047F8" />
            <span>REMOVER</span>
          </ButtonRemoveToCart>
        </DivButtons>
        <Line />
      </DivTitleAndButtons>
    </CardCoffeeHorizontalContainer>
  );
}
