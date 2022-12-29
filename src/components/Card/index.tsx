import {
  ButtonAdd,
  ButtonRemove,
  ButtonToCart,
  Category,
  Description,
  DivCard,
  DivValueAndButtons,
  Image,
  Title,
  Value,
  DivButtonsRemoveAndAdd
} from "./style";

import { coffee } from "../../utils/coffee";

import img from "../../assets/Americano.png";
import { Minus, Plus, ShoppingCart } from "phosphor-react";

export function Card() {
  return (
    <DivCard>
      <Image src={img} />
      <Category>
        <span>{coffee[0].category}</span>
      </Category>
      <Title>
        <span>{coffee[0].title}</span>
      </Title>
      <Description>
        <span>{coffee[0].description}</span>
      </Description>

      <DivValueAndButtons>
        <Value>
          <span>
            {coffee[0].value.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </Value>

        <DivButtonsRemoveAndAdd>
          <ButtonRemove>
            <Minus weight="bold" size={14} />
          </ButtonRemove>
          <span>1</span>
          <ButtonAdd>
            <Plus weight="bold" size={14} />
          </ButtonAdd>
        </DivButtonsRemoveAndAdd>

        <ButtonToCart>
          <ShoppingCart weight="fill" size={20} color={"#F3F2F2"}/>
        </ButtonToCart>
      </DivValueAndButtons>
    </DivCard>
  );
}
