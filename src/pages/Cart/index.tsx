import { Header } from "../../components/Header";
import {
  CartContainer,
  DivInformationsCoffeeInCart,
  DivAdressAndMethodsPayment,
  DivTitleCoffeeAndInformationsCoffe,
  DivInformationsOrder,
  DivTotalItems,
  DivFreight,
  DivTotal,
  ButtonConfirmOrder,
  TextNoCoffee,
  Form,
  TitleCoffees,
} from "./style";

import { CardPaymentMethods } from "../../components/CardPaymentMethods";
import { CardCoffeeHorizontal } from "../../components/CardCoffeeHorizontal";
import { useCoffeInformationsContext } from "../../contexts/CoffeeInformationsContext";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { AddressForm } from "./components/AddressForm";

const newAddressFormValidationSchema = zod.object({
  cep: zod
    .number()
    .min(8, "O CEP precisa de 8 digitos!")
    .max(8, "O CEP tem apenas 8 digitos!"),
  street: zod
    .string()
    .min(3, "A rua precisa de pelo menos 3 caracteres!")
    .max(60, "A rua não pode ser maior que 60 caracteres!"),
  num: zod
    .number()
    .min(3, "O número da resiência precisa de pelo menos 3 caracteres!")
    .max(5, "O número da resiência não pode ser maior que 5 caracteres!"),
  complement: zod
    .string()
    .min(3, "O complemento precisa de pelo menos 3 caracteres!")
    .max(60, "O complemento não pode ser maior que 60 caracteres!"),
  district: zod
    .string()
    .min(3, "O bairro precisa de pelo menos 3 caracteres!")
    .max(60, "O bairro não pode ser maior que 60 caracteres!"),
  city: zod
    .string()
    .min(3, "A cidade precisa de pelo menos 3 caracteres!")
    .max(30, "A cidade não pode ser maior que 60 caracteres!"),
  uf: zod
    .string()
    .min(2, "Preencha um UF válido!")
    .max(2, "Preencha um UF válido!"),
});

interface AddressFormData {
  cep: number;
  street: string;
  num: number;
  complement: string;
  district: string;
  city: string;
  uf: string;
}

export function Cart() {
  const { quantityToCart } = useCoffeInformationsContext();

  const newAddrressForm = useForm<AddressFormData>({
    resolver: zodResolver(newAddressFormValidationSchema),
    defaultValues: {
      cep: 0,
      street: "",
      num: 0,
      complement: "",
      district: "",
      city: "",
      uf: "",
    },
  });

  return (
    <>
      <Header />
      <CartContainer>
        <Form>
          <DivAdressAndMethodsPayment>
          <AddressForm />
            <CardPaymentMethods />
          </DivAdressAndMethodsPayment>

          <DivTitleCoffeeAndInformationsCoffe>
            <TitleCoffees>Cafés selecionados</TitleCoffees>

            <DivInformationsCoffeeInCart>
              {quantityToCart.length === 0 && (
                <div>
                  <TextNoCoffee>Nenhum café selecionado.</TextNoCoffee>
                </div>
              )}
              {quantityToCart.map((item) => {
                return (
                  <CardCoffeeHorizontal
                    id={item.id}
                    key={item.id}
                    title={item.title}
                    quantity={item.quantity}
                    value={item.value}
                    image={item.image}
                  />
                );
              })}

              <DivInformationsOrder>
                <DivTotalItems>
                  <span>Total de itens:</span>
                  <span>R$ 5,00</span>
                </DivTotalItems>

                <DivFreight>
                  <span>Frete:</span>
                  <span>R$ 5,00</span>
                </DivFreight>

                <DivTotal>
                  <strong>Total:</strong>
                  <strong>R$ 10,00</strong>
                </DivTotal>

                <ButtonConfirmOrder type="submit">
                  CONFIRMAR PEDIDO
                </ButtonConfirmOrder>
              </DivInformationsOrder>
            </DivInformationsCoffeeInCart>
          </DivTitleCoffeeAndInformationsCoffe>
        </Form>
      </CartContainer>
    </>
  );
}
