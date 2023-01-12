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

import { CardPaymentMethods } from "./components/CardPaymentMethods";
import { CardCoffeeHorizontal } from "../../components/CardCoffeeHorizontal";
import { useCoffeInformationsContext } from "../../contexts/CoffeeInformationsContext";
import { useAddressInformationsContext } from "../../contexts/AddressInformationsContext";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { AddressForm } from "./components/AddressForm";
import { useNavigate } from "react-router-dom";

const newAddressFormValidationSchema = zod.object({
  cep: zod.number().min(8, "O CEP precisa de 8 digitos!"),
  street: zod.string().min(1, "A rua precisa de pelo menos 3 caracteres!"),
  number: zod
    .number()
    .min(1, "O número da resiência precisa de pelo menos 3 caracteres!"),
  complement: zod
    .string()
    .min(1, "O complemento precisa de pelo menos 3 caracteres!"),
  district: zod.string().min(1, "O bairro precisa de pelo menos 3 caracteres!"),
  city: zod.string().min(1, "A cidade precisa de pelo menos 3 caracteres!"),
  uf: zod.string().min(1, "Preencha um UF válido!"),
});

interface AddressFormData {
  cep: number;
  street: string;
  number: number;
  complement: string;
  district: string;
  city: string;
  uf: string;
}

export function Cart() {
  const { coffees } = useCoffeInformationsContext();

  const navigate = useNavigate();

  const selectedsCoffeesToCart = coffees.filter((item) => item.quantity);

  const newAddrressForm = useForm<AddressFormData>({
    resolver: zodResolver(newAddressFormValidationSchema),
    defaultValues: {
      street: "",
      complement: "",
      district: "",
      city: "",
      uf: "",
    },
  });

  const { handleSubmit, watch, reset } = newAddrressForm;

  function handleForm() {
    reset();
    navigate("/finished-order");
  }

  const sumTotalItens = coffees.reduce((acc, item) => {
    return acc + item.value * item.quantity;
  }, 0);
  const sumTotal = sumTotalItens + 5;

  const cep = watch("cep");
  const street = watch("street");
  const number = watch("number");
  const district = watch("district");
  const city = watch("city");
  const uf = watch("uf");

  return (
    <div>
      <Header />
      <CartContainer>
        <Form onSubmit={handleSubmit(handleForm)} action="">
          <DivAdressAndMethodsPayment>
            <FormProvider {...newAddrressForm}>
              <AddressForm />
            </FormProvider>
            <CardPaymentMethods />
          </DivAdressAndMethodsPayment>

          <DivTitleCoffeeAndInformationsCoffe>
            <TitleCoffees>Cafés selecionados</TitleCoffees>

            <DivInformationsCoffeeInCart>
              {selectedsCoffeesToCart.length === 0 && (
                <div>
                  <TextNoCoffee>Nenhum café selecionado.</TextNoCoffee>
                </div>
              )}
              {selectedsCoffeesToCart.map((item) => {
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
                  <span>
                    {sumTotalItens.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </span>
                </DivTotalItems>

                <DivFreight>
                  <span>Frete:</span>
                  <span>R$ 5,00</span>
                </DivFreight>

                <DivTotal>
                  <strong>Total:</strong>
                  <strong>
                    {sumTotal.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </strong>
                </DivTotal>

                <ButtonConfirmOrder
                  type="submit"
                  disabled={
                    !street || !district || !city || !uf || !cep || !number
                  }
                >
                  CONFIRMAR PEDIDO
                </ButtonConfirmOrder>
              </DivInformationsOrder>
            </DivInformationsCoffeeInCart>
          </DivTitleCoffeeAndInformationsCoffe>
        </Form>
      </CartContainer>
    </div>
  );
}
