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
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { AddressForm } from "./components/AddressForm";
import { NavLink } from "react-router-dom";

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
  const { quantityToCart } = useCoffeInformationsContext();

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
  }

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
              {quantityToCart.length === 0  && (
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

                <NavLink to={"/finished-order"}>
                  <ButtonConfirmOrder
                    type="submit"
                    disabled={
                      !street || !district || !city || !uf || !cep || !number
                    }
                  >
                    CONFIRMAR PEDIDO
                  </ButtonConfirmOrder>
                </NavLink>
              </DivInformationsOrder>
            </DivInformationsCoffeeInCart>
          </DivTitleCoffeeAndInformationsCoffe>
        </Form>
      </CartContainer>
    </div>
  );
}
