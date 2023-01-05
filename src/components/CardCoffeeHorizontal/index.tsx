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
            <ButtonRemove>
              <Minus size={14} color="#8047F8" />
            </ButtonRemove>
            <span>1</span>
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
