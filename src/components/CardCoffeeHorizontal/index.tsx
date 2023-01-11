import { Minus, Plus, Trash } from "phosphor-react";
import { useCoffeInformationsContext } from "../../contexts/CoffeeInformationsContext";
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
  quantity: number;
}

export function CardCoffeeHorizontal({
  id,
  title,
  value,
  image,
  quantity,
}: CardCoffeeHorizontalProps) {

  const {
    handleAddCoffeeInCart,
    handleRemoveCoffeeInCart,
    handleRemoveTotalCoffeeInCart,
  } = useCoffeInformationsContext();

  return (
    <CardCoffeeHorizontalContainer>
      <div>
        <Image src={image} />
      </div>
      <DivTitleAndButtons>
        <DivTitleAndValue>
          <TitleCoffee>{title}</TitleCoffee>
          <ValueCoffee>
            {value.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </ValueCoffee>
        </DivTitleAndValue>
        <DivButtons>
          
          <ButtonLessAndmore>
            <ButtonRemove
              type="button"
              onClick={() => {
                handleRemoveCoffeeInCart(id);
              }}
            >
              <Minus size={14} color="#8047F8" />
            </ButtonRemove>
            <span>{quantity}</span>
            <ButtonAdd
              type="button"
              onClick={() => {
                handleAddCoffeeInCart(id);
              }}
            >
              <Plus size={14} color="#8047F8" />
            </ButtonAdd>
          </ButtonLessAndmore>

          <ButtonRemoveToCart type="button" onClick={() => {handleRemoveTotalCoffeeInCart(id)}}>
            <Trash size={14} color="#8047F8" />
            <span>REMOVER</span>
          </ButtonRemoveToCart>
        </DivButtons>
        <Line />
      </DivTitleAndButtons>
    </CardCoffeeHorizontalContainer>
  );
}
