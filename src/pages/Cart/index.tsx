import { MapPinLine } from "phosphor-react";
import { Header } from "../../components/Header";
import {
  BodyAddress,
  CartContainer,
  DivInformationsCoffeeInCart,
  DivMapAndText,
  InputCEP,
  InputCity,
  InputComplement,
  InputDistrict,
  InputNumber,
  InputState,
  InputStreet,
  TitleCoffees,
  DivAdressAndMethodsPayment,
  DivTitleCoffeeAndInformationsCoffe,
  DivInformationsOrder,
  DivTotalItems,
  DivFreight,
  DivTotal,
  ButtonConfirmOrder,
} from "./style";

import { CardPaymentMethods } from "../../components/CardPaymentMethods";
import { CardCoffeeHorizontal } from "../../components/CardCoffeeHorizontal";

export function Cart() {
  return (
    <>
      <Header />
      <CartContainer>
        <DivAdressAndMethodsPayment>
          <h2>Complete seu pedido</h2>

          <BodyAddress>
            <DivMapAndText>
              <div>
                <MapPinLine
                  size={23}
                  style={{ marginTop: -2 }}
                  color="#C47F17"
                />
              </div>
              <div>
                <h4>Endereço de Entrega </h4>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </div>
            </DivMapAndText>

            <div>
              <InputCEP title="CEP" placeholder="CEP" required />
              <InputStreet title="Rua" placeholder="Rua" required />
            </div>
            <div>
              <InputNumber title="Número" placeholder="Número" required />
              <InputComplement title="Complemento" placeholder="Complemento" />
            </div>
            <div>
              <InputDistrict title="Bairro" placeholder="Bairro" required />
              <InputCity title="Cidade" placeholder="Cidade" required />
              <InputState title="UF" placeholder="UF" required />
            </div>
          </BodyAddress>

          <CardPaymentMethods />
        </DivAdressAndMethodsPayment>

        <DivTitleCoffeeAndInformationsCoffe>
          <TitleCoffees>Cafés selecionados</TitleCoffees>

          <DivInformationsCoffeeInCart>
            <CardCoffeeHorizontal />
            <CardCoffeeHorizontal />
            <CardCoffeeHorizontal />

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

              <ButtonConfirmOrder onClick={() => {}}>CONFIRMAR PEDIDO</ButtonConfirmOrder>
            </DivInformationsOrder>
          </DivInformationsCoffeeInCart>
        </DivTitleCoffeeAndInformationsCoffe>
      </CartContainer>
    </>
  );
}
