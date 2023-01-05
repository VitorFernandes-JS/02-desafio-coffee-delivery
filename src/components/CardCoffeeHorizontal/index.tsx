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
} from "./style";

export function CardCoffeeHorizontal() {
  return (
    <CardCoffeeHorizontalContainer>
      <div>
        <Image src={Cafe} />
      </div>
      <DivTitleAndButtons>
        <DivTitleAndValue>
          <TitleCoffee>Expresso Tradicional</TitleCoffee>
          <ValueCoffee>R$ 5,00</ValueCoffee>
        </DivTitleAndValue>
        <DivButtons>
          <ButtonLessAndmore>
            <Minus size={14} color="#8047F8" />
            <span>1</span>
            <Plus size={14} color="#8047F8" />
          </ButtonLessAndmore>
          <ButtonRemoveToCart>
            <Trash size={14} color="#8047F8" />
            <span>REMOVER</span>
          </ButtonRemoveToCart>
        </DivButtons>
      </DivTitleAndButtons>
    </CardCoffeeHorizontalContainer>
  );
}
