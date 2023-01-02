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
  DivButtonsRemoveAndAdd,
  DivCategory
} from "./style";

import { Minus, Plus, ShoppingCart } from "phosphor-react";

export interface CardProps {
  title: string;
  description: string;
  category: string;
  secondeCategory?: string;
  thirdCategory?: string;
  value: number;
  image: string;
}

export function Card({
  title,
  description,
  category,
  secondeCategory,
  thirdCategory,
  value,
  image,
}: CardProps) {
  return (
    <DivCard>
      <Image src={image} />
      <DivCategory>
        <Category>
          <span>{category}</span>
        </Category>
        {secondeCategory && (
          <Category>
            <span>{secondeCategory}</span>
          </Category>
        )}
        {thirdCategory && (
          <Category>
            <span>{thirdCategory}</span>
          </Category>
        )}
      </DivCategory>
      <Title>
        <span>{title}</span>
      </Title>
      <Description>
        <span>{description}</span>
      </Description>

      <DivValueAndButtons>
        <Value>
          <span>
            {value.toLocaleString("pt-br", {
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
          <ShoppingCart weight="fill" size={20} color={"#F3F2F2"} />
        </ButtonToCart>
      </DivValueAndButtons>
    </DivCard>
  );
}
