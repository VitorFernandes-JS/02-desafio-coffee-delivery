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
  DivCategory,
} from "./style";

import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useCoffeInformationsContext } from "../../contexts/CoffeeInformationsContext";
import { toast } from "react-toastify";

export interface CardCoffeeVerticalProps {
  id: string;
  title: string;
  description: string;
  category: string;
  secondeCategory?: string;
  thirdCategory?: string;
  quantity: number;
  value: number;
  image: string;
}

export function CardCoffeeVertical({
  id,
  title,
  description,
  category,
  secondeCategory,
  thirdCategory,
  value,
  image,
  quantity,
}: CardCoffeeVerticalProps) {
  
  const {
    handleSendCoffeeToCart,
    handleAddCoffeeInCart,
    handleRemoveCoffeeInCart,
    visible,
  } = useCoffeInformationsContext();

  function visibleModalToast() {
    if (visible === true) {
      toast.success('Café adicionado ao carrinho', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
  }

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
            <Minus
              weight="bold"
              size={14}
              onClick={() => {
                handleRemoveCoffeeInCart(id);
              }}
            />
          </ButtonRemove>
          <span>{quantity}</span>
          <ButtonAdd>
            <Plus
              weight="bold"
              size={14}
              onClick={() => {
                handleAddCoffeeInCart(id);
              }}
            />
          </ButtonAdd>
        </DivButtonsRemoveAndAdd>

        <ButtonToCart disabled={quantity === 0}>
          <ShoppingCart
            weight="fill"
            size={20}
            color={"#F3F2F2"}
            onClick={() => {
              handleSendCoffeeToCart(id);
              visibleModalToast();
            }}
          />
        </ButtonToCart>
      </DivValueAndButtons>
    </DivCard>
  );
}
